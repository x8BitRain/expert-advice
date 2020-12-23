import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
const testQuestions = [
  {
    id: 0,
    title: "what's the deal with? 1",
    slug: "whats-the-deal-with-1",
    userId: 0,
    description: "description for question 1",
    createdAt: new Date(),
    tags: ["tag1", "tag2"],
  },
  {
    id: 1,
    title: "what's the deal with? 2",
    slug: "whats-the-deal-with-2",
    userId: 0,
    description: "description for question 2",
    createdAt: new Date(),
    tags: ["cinema", "sweden"],
  },
]

module('Integration | Component | question-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders a list of questions', async function(assert) {
    this.set('questions', testQuestions)

    await render(hbs`<QuestionList @questions={{questions}} />`);

    assert.equal(this.element.children.length, 2);

  });
});
