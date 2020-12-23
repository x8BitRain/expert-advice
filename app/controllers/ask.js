import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import slugify from '../utils/stringToSlug';

export default class AskController extends Controller {
  @service session;
  @tracked questionTitle;
  @tracked questionDescription;
  @tracked questionTags;
  @tracked requestErrors;

  @action
  addQuestion(userId) {
    this.store
      .createRecord('question', {
        title: this.questionTitle,
        description: this.questionDescription,
        tags: this.questionTags ? this.questionTags.split(',') : '',
        slug: slugify(this.questionTitle),
        userId: userId ? userId : this.session.user,
        createdAt: new Date()
      })
      .save()
      .then(() => {
        this.questionTitle = '';
        this.questionDescription = '';
        this.questionTags = '';
        this.transitionToRoute('index');
      })
      .catch((adapterError) => {
        this.requestErrors = adapterError.errors;
      });
  }
}
