import Component from '@ember/component';
import RippleSupport from '../mixins/ripple-support';
import layout from '../templates/components/mdl-checkbox';
import { computed, get, set } from '@ember/object';
import { or } from '@ember/object/computed';

const MdlCheckbox = Component.extend(RippleSupport, {
  layout,

  classNames: [
    'mdl-checkbox',
    'mdl-js-checkbox',
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
    let mdl = new window.MaterialCheckbox(this.element);
    set(this, '__mdlComponent', mdl);

    if (get(this, 'isRipple')) {
      let [rippleContainer] = this.$('.mdl-checkbox__ripple-container');
      this.initRipple(rippleContainer);
    }
  },

  actions: {
    update(value) {
      get(this, 'update')(value);
    }
  }
});

MdlCheckbox.reopenClass({
  positionalParams: ['text']
});

export default MdlCheckbox;
