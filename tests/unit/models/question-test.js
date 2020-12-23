import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | question', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('question', {
      title: "Test title",
      description: "Test description",
      tags: ['test1', 'test2'],
      userId: 1,
    });
    assert.ok(model);
  });
});
