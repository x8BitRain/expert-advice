import { module, test } from "qunit";
import { currentURL } from "@ember/test-helpers";
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
    const firstQuestionList = document.querySelector(questionPage.selectors.answersList).childElementCount
    await questionPage.fillInAnswer("test");
    await questionPage.submitAnswer();
    const secondQuestionList = document.querySelector(questionPage.selectors.answersList).childElementCount
    assert.notEqual(firstQuestionList, secondQuestionList);
    assert.ok(currentURL().match('/question'));
  });

  test("Should delete a question", async function(assert) {
    defaultScenario(this.server)
    await loginPage.manualLogin();
    await questionPage.visitUserQuestion();
    await questionPage.deletePost();
    assert.ok(currentURL() === '/');
  });

  test("Should modify a question", async function(assert) {
    defaultScenario(this.server)
    await loginPage.manualLogin();
    await questionPage.visitUserQuestion();
    await questionPage.modifyQuestionTitle();
    await questionPage.modifyQuestionDescription();
    await questionPage.modifyQuestionTags();
    await questionPage.modifyQuestionSubmit()
    assert.ok(currentURL() === '/');
  });
});
