import Component from "@glimmer/component";

export default class QuestionListComponent extends Component {
  get results() {
    let { questions, query } = this.args;

    if (query) {
      questions = questions.filter(question => question.tags.includes('Politics'));
    }
    return questions;
  }
}
