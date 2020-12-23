import Controller from '@ember/controller';
import { tracked } from "@glimmer/tracking";
import { action } from '@ember/object';
import { inject as service } from "@ember/service";
import slugify from "../utils/stringToSlug";

export default class QuestionController extends Controller {
  @service session;
  @tracked answerDescription
  @tracked editQuestionTitle;
  @tracked editQuestionDescription;
  @tracked editQuestionTags;

  @action
  addAnswer() {
    let question = this.model;
    this.store.createRecord('answer', {
      question: question,
      description: this.answerDescription,
      createdAt: new Date()
    }).save();
    this.answerDescription = "";
  }

  @action
  updateQuestion(item) {
    return this.store.findAll('question', { include: 'answers,user' }).then(questions => {
      const question = questions.filter((question) => question.slug === item.slug)[0]
      question.title = this.editQuestionTitle;
      question.description = this.editQuestionDescription;
      question.tags = this.editQuestionTags.split(',');
      question.slug = slugify(this.editQuestionTitle);
      question.createdAt = new Date();
    }).then(() => {
      this.transitionToRoute('index');
    });
  }

  @action
  deleteQuestion(item) {
    return this.store.findRecord("question", item.id, { backgroundReload: false }).then(function(comment) {
      comment.destroyRecord();
    }).then(() => {
      this.transitionToRoute('index');
    });
  }
}

