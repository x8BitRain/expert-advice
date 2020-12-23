import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | format-date', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    this.set('inputValue', "2020-12-03T06:55:08.932Z");

    await render(hbs`{{format-date inputValue}}`);

    assert.equal(this.element.textContent.trim(), '12/3/2020, 7:55:08 AM');
  });
});
