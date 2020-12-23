import { module, test } from "qunit";
import { currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";
import { setupMirage } from "ember-cli-mirage/test-support";
import defaultScenario from "ember-test-assignment/mirage/scenarios/default";
import askPage from "../helpers/page-objects/ask";
import loginPage from "../helpers/page-objects/login";

module("Acceptance | askPage", function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test("Asking a question", async function(assert) {
    defaultScenario(this.server)

    // Login before running ask test
    await loginPage.manualLogin()
    await askPage.visit();
    await askPage.fillInTitle("test");
    await askPage.fillInDescription("test");
    await askPage.fillInTags("test1, test2, test3");
    await askPage.submit();
    assert.equal(currentURL(), "/");
  });

  test("Asking a question without filling in the forms", async function(assert) {
    defaultScenario(this.server)
    await loginPage.manualLogin();
    await askPage.visit();
    await askPage.submit();
    assert.dom(askPage.selectors.error).containsText("Please enter a title and description");
    assert.ok(currentURL().match('/ask'));
  });
});
