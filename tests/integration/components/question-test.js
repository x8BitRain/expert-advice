import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
const answers = [
    {
      id: "0",
      userId: 0,
      questionId: 1,
      description: "answer 1",
      createdAt: "2020-12-03T06:55:08.932Z",
    },
    {
      id: "1",
      userId: 0,
      questionId: 2,
      description: "answer 2",
      createdAt: "2020-12-03T06:55:08.932Z",
    },
    {
      id: "2",
      userId: 0,
      questionId: 3,
      description: "answer 3",
      createdAt: "2020-12-03T06:55:08.932Z",
    }
  ]


module('Integration | Component | question', function(hooks) {
  setupRenderingTest(hooks);

  test('Renders title, description, time, tags and answers', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('title', 'title');
    this.set('slug', 'my-slug');
    this.set('description', 'description');
    this.set('createdAt', '2020-12-03T06:55:08.932Z');
    this.set('tags', ['thing1', 'thing2']);
    this.set('answers', answers);

    await render(hbs`
      <Question
        @title={{title}}
        @slug={{slug}}
        @description={{description}}
        @tags={{tags}}
        @createdAt={{createdAt}}
        @answers={{answers}}
        @isViewingQuestion={{true}}
      />
    `);

    assert.equal(
      this.element.querySelector('h1').innerText,
      'title',
      "Should output a title"
    );

    assert.equal(
      this.element.querySelector('h3').innerText,
      'description',
      "Should output a description"
    );

    assert.equal(
      this.element.querySelector('h4').innerText,
      '12/3/2020, 7:55:08 AM',
      "Should output a valid time"
    );

    assert.equal(
      this.element.querySelectorAll('span').length,
      2,
      "Should output two tags"
    );

    assert.equal(
      this.element.querySelector('#question-answers').children.length,
      3,
      "Should render three answers"
    );
  });

  test('Should not render any answers if not viewing individual question', async function(assert) {

    await render(hbs`
      <Question
        @title={{title}}
        @slug={{slug}}
        @description={{description}}
        @tags={{tags}}
        @createdAt={{createdAt}}
        @answers={{answers}}
        @isViewingQuestion={{false}}
      />
    `);

    assert.equal(
      this.element.querySelector('#question-answers'),
      undefined,
    );
  });
});
