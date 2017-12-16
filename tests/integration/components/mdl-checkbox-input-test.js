import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdl-checkbox-input', 'Integration | Component | mdl checkbox input', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{mdl-checkbox-input}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#mdl-checkbox-input}}
      template block text
    {{/mdl-checkbox-input}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
