import Component from '@ember/component';
import layout from '../templates/components/mdl-slider';
import { get, set } from '@ember/object';
import { or } from '@ember/object/computed';

export default Component.extend({
  layout,

  attributeBindings: ['disabled', 'min', 'max', 'tabindex', 'type', 'value'],

  classNames: [
    'mdl-slider',
    'mdl-js-slider'
  ],

  min: 0,

  max: 100,

  tabindex:0,

  type: 'range',

  tagName: 'input',

  disabled: or('isDisabled'),

  input(e) {
    let update = get(this, 'update');
    if (update) {
      update(e.target.value);
    }
  },

  didInsertElement() {
    let mdl = new window.MaterialSlider(this.element);
    set(this, '__mdlComponent', mdl);
  }
});
