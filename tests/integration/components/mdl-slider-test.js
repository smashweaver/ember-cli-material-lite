import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdl-slider', 'Integration | Component | mdl slider', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{mdl-slider value=0}}`);

  assert.ok(this.$('.mdl-slider').hasClass('is-upgraded'));
});
