import { click, fillIn } from "@ember/test-helpers";
import indexPage from "./index";

const questionPage = {
  url: "/question",

  selectors: {
    firstQuestionLink: ".question--item > a",
    questionInput: ".question-answer__form",
    submitButton: ".question-answer__button",
    answersList: "#question-answers",
    deleteButton: ".btn.btn-danger",
    modifyQuestionTitle: ".question-modify__title",
    modifyQuestionDescription: ".question-modify__description",
    modifyQuestionTags: ".question-modify__tags",
    modifyQuestionSubmit: ".btn.btn-info"
  },

  clickQuestion() {
    return click(this.selectors.firstQuestionLink);
  },

  fillInAnswer(value) {
    return fillIn(this.selectors.questionInput, value);
  },

  submitAnswer() {
    return click(this.selectors.submitButton);
  },

  visitUserQuestion() {
    const questions = document.querySelector(indexPage.selectors.questionList);
    const userQuestion = Array.from(questions.children).filter(e => e.innerHTML.match('test@test.com'))[0]
    return click(userQuestion.querySelector('a'));
  },

  modifyQuestionTitle() {
    return fillIn(this.selectors.modifyQuestionTitle, 'test');
  },

  modifyQuestionDescription() {
    return fillIn(this.selectors.modifyQuestionDescription, 'test');
  },

  modifyQuestionTags() {
    return fillIn(this.selectors.modifyQuestionTags, 'test1, test2');
  },

  modifyQuestionSubmit() {
    return click(this.selectors.modifyQuestionSubmit);
  },


  deletePost() {
    return click(this.selectors.deleteButton);
  },

};

export default questionPage;
