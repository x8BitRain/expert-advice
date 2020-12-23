import { click, fillIn } from "@ember/test-helpers";

const questionPage = {
  url: "/question",

  selectors: {
    firstQuestionLink: ".question--item > a",
    questionInput: ".question-answer__form",
    submitButton: "question-answer__button",
    answersList: "#question-answers"
  },

  clickQuestion() {
    return click(this.selectors.firstQuestionLink);
  },

  fillInAnswer(value) {
    return fillIn(this.selectors.questionInput, value);
  },

  submitAnswer() {
    return click(this.selectors.submitButton);
  }

};

export default questionPage;
