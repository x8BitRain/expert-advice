import { module, test } from "qunit";
// import { currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import { setupMirage } from "ember-cli-mirage/test-support";
import defaultScenario from "ember-test-assignment/mirage/scenarios/default";
import indexPage from "../helpers/page-objects/index";
import loginPage from "../helpers/page-objects/login";
// import loginPage from "../helpers/page-objects/login";


module("Acceptance | indexPage", function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test("Clicking a tag should change the items on index", async function(assert) {
    defaultScenario(this.server)

    await loginPage.manualLogin()
    const firstQuestion = document.querySelector(indexPage.selectors.questionItem).innerHTML
    await indexPage.clickTag()
    const secondQuestion = document.querySelector(indexPage.selectors.questionItem).innerHTML
    /* If selecting one of many DOM elements will choose the first instance, if the first instance's HTML
       doesn't equal the second first instance's HTML it means the page has changed and sorted the questions.
     */
    assert.notEqual(firstQuestion, secondQuestion);
  });

  test("Navigating to page two", async function(assert) {
    defaultScenario(this.server)
    await loginPage.manualLogin()
    const firstQuestion = document.querySelector(indexPage.selectors.questionItem).innerHTML
    await indexPage.goToSecondPage()
    const secondQuestion = document.querySelector(indexPage.selectors.questionItem).innerHTML
    assert.notEqual(firstQuestion, secondQuestion);
  });
});
