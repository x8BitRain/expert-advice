import { module, test } from "qunit";
import { currentURL, find} from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import { setupMirage } from "ember-cli-mirage/test-support";
import defaultScenario from "ember-test-assignment/mirage/scenarios/default";
import loginPage from "../helpers/page-objects/login";
import questionPage from "../helpers/page-objects/question";

module("Acceptance | QuestionPage", function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test("Answering a question", async function(assert) {
    defaultScenario(this.server)

    await loginPage.manualLogin()
    await questionPage.clickQuestion()
    const firstQuestionList = find(questionPage.selectors.answersList)
    await questionPage.fillInAnswer("test");
    await questionPage.submitAnswer();
    const secondQuestionList = find(questionPage.selectors.answersList)
    assert.notEqual(firstQuestionList.children.length, secondQuestionList.children.length);
  });

  // test("Asking a question without filling in the forms", async function(assert) {
  //   defaultScenario(this.server)
  //   await loginPage.manualLogin();
  //   await askPage.visit();
  //   await askPage.submit();
  //   assert.dom(askPage.selectors.error).containsText("Please enter a title and description");
  //   assert.ok(currentURL().match('/ask'));
  // });
});
