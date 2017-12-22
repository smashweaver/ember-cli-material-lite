import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdl-snackbar', 'Integration | Component | mdl snackbar', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{mdl-snackbar}}`);

  assert.equal(this.$().text().trim(), '');
});
