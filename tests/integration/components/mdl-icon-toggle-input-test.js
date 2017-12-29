import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdl-icon-toggle-input', 'Integration | Component | mdl icon toggle input', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mdl-icon-toggle-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mdl-icon-toggle-input}}
      template block text
    {{/mdl-icon-toggle-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
