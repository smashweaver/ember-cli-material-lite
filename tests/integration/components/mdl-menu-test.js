import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mdl-menu', 'Integration | Component | mdl menu', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`
    {{#mdl-menu}}
      template block text
    {{/mdl-menu}}
  `);

  assert.equal(this.$('.material-icons').text().trim(), 'more_vert');
  assert.equal(this.$('.mdl-menu').text().trim(), 'template block text');
});
