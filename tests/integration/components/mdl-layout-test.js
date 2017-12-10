import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdl-layout', 'Integration | Component | mdl layout', {
  integration: true
});

test('it renders', function(assert) {
  // Template block usage:
  this.render(hbs`
    {{#mdl-layout}}
      template block text
    {{/mdl-layout}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
