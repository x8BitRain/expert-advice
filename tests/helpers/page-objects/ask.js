import { click, visit, fillIn } from "@ember/test-helpers";

const askPage = {
  url: "/ask",

  selectors: {
    titleField: ".ask-form__title",
    descriptionField: ".ask-form__description",
    tagsField: ".ask-form__tags",
    submitButton: ".ask-form__submit",
    error: ".ask-form__error"
  },

  visit() {
    return visit(this.url);
  },

  fillInTitle(value) {
    return fillIn(this.selectors.titleField, value);
  },

  fillInDescription(value) {
    return fillIn(this.selectors.descriptionField, value);
  },

  fillInTags(value) {
    return fillIn(this.selectors.tagsField, value);
  },


  submit() {
    return click(this.selectors.submitButton);
  },

  hasError() {
    return this.selectors.error
  }
};

export default askPage;
