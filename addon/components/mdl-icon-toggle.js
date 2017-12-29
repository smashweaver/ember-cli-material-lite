import Component from '@ember/component';
import RippleSupport from '../mixins/ripple-support';
import layout from '../templates/components/mdl-icon-toggle';
import { computed, get, set } from '@ember/object';
import { or } from '@ember/object/computed';

const MdlIconToggle = Component.extend(RippleSupport, {
  layout,

  classNames: [
    'mdl-icon-toggle',
    'mdl-js-icon-toggle',
    'mdl-js-ripple-effect'
  ],

  attributeBindings: ['for'],

  tagName: 'label',

  isRipple: true,

  for: or('_checkboxId'),

  _checkboxId: computed(function() {
    return `${this.elementId}-checkbox`;
  }),

  didInsertElement() {
    let mdl = new window.MaterialIconToggle(this.element);
    set(this, '__mdlComponent', mdl);

    if (get(this, 'isRipple')) {
      let [rippleContainer] = this.$('.mdl-icon-toggle__ripple-container');
      this.initRipple(rippleContainer);
    }
  },

  actions: {
    update(value) {
      get(this, 'update')(value);
    }
  }
});

MdlIconToggle.reopenClass({
  positionalParams: ['icon']
});

export default MdlIconToggle;
