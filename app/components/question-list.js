import Component from "@glimmer/component";
// import { inject as service } from "@ember/service";
// import { action, filter } from "@ember/object/computed";
// import { tracked } from '@glimmer/tracking';

export default class QuestionListComponent extends Component {


  get results() {
    let { questions, query } = this.args;

    if (query) {
      questions = questions.filter(question => question.tags.includes('Politics'));
    }
    return questions;
  }
}
