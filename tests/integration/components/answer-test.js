import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
const testAnswer =
  {
    id: "0",
    userId: 0,
    questionId: 1,
    description: "answer 1",
    createdAt: "2020-12-03T06:55:08.932Z",
  }

module('Integration | Component | answer', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('answers', testAnswer);

    await render(hbs`
      <Answer
        @description={{answers.description}}
        @createdAt={{answers.createdAt}}
      />
    `);

    assert.equal(this.element.querySelector('p').innerText, 'answer 1');
    assert.equal(this.element.querySelector('h6').innerText, '12/3/2020, 7:55:08 AM');
    // assert.equal(this.element.textContent.trim(), 'template block text');

  });
});

