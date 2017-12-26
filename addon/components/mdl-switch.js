import Component from '@ember/component';
import RippleSupport from '../mixins/ripple-support';
import layout from '../templates/components/mdl-switch';
import { computed, get, set } from '@ember/object';
import { or } from '@ember/object/computed';

export default Component.extend(RippleSupport, {
  layout,

  attributeBindings: ['for'],

  classNames: [
    'mdl-switch',
    'mdl-js-switch'
  ],

  tagName: 'label',

  isRipple: true,

  for: or('_checkboxId'),

  _checkboxId: computed(function() {
    return `${this.elementId}-switch`;
  }),

  didInsertElement() {
    let mdl = new window.MaterialSwitch(this.element);
    set(this, '__mdlComponent', mdl);

    if (get(this, 'isRipple')) {
      let [rippleContainer] = this.$('.mdl-switch__ripple-container');
      this.initRipple(rippleContainer);
    }
  },

  actions: {
    update(value) {
      get(this, 'update')(value);
    }
  }
});
