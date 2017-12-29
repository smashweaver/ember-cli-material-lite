import Component from '@ember/component';
import RippleSupport from '../mixins/ripple-support';
import layout from '../templates/components/mdl-radio';
import { computed, get, set } from '@ember/object';
import { or } from '@ember/object/computed';

const MdlRadio = Component.extend(RippleSupport, {
  layout,

  attributeBindings: ['for'],

  classNames: [
    'mdl-radio',
    'mdl-js-radio',
    'mdl-js-ripple-effect'
  ],

  tagName: 'label',

  isRipple: true,

  for: or('_radioButtonId'),

  _radioButtonId: computed(function() {
    return `${this.elementId}-radio`;
  }),

  didInsertElement() {
    let mdl = new window.MaterialRadio(this.element);
    set(this, '__mdlComponent', mdl);

    if (get(this, 'isRipple')) {
      let [rippleContainer] = this.$('.mdl-radio__ripple-container');
      this.initRipple(rippleContainer);
    }
  },

  didUpdateAttrs() {
    this.$().removeClass('is-checked');
    if (get(this, 'value') === get(this, 'groupValue')) {
      this.$().addClass('is-checked');
    }
  },

  actions: {
    update(value) {
      get(this, 'update')(value);
    }
  }
});

MdlRadio.reopenClass({
  positionalParams: ['text']
});

export default MdlRadio;
