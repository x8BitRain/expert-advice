import { click, visit, fillIn } from "@ember/test-helpers";

const loginPage = {
  url: "/login",

  selectors: {
    emailField: ".login-form #email-field",
    passwordField: ".login-form #password-field",
    submitButton: ".login-form button[type='submit']",
    error: ".login-form__error"
  },

  visit() {
    return visit(this.url);
  },

  fillInEmail(value) {
    return fillIn(this.selectors.emailField, value);
  },

  fillInPassword(value) {
    return fillIn(this.selectors.passwordField, value);
  },

  submit() {
    return click(this.selectors.submitButton);
  },

  async manualLogin () {
    await loginPage.visit();
    await loginPage.fillInEmail("test@test.com");
    await loginPage.fillInPassword("test");
    await loginPage.submit();
  },

};

export default loginPage;
