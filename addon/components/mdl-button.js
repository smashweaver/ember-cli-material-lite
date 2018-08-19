import Component from '@ember/component';
import RippleSupport from '../mixins/ripple-support';
import layout from '../templates/components/mdl-button';
import { get, set, setProperties } from '@ember/object';
import { or } from '@ember/object/computed';

const MdlButton = Component.extend(RippleSupport, {
  layout,

  tagName: 'button',

  attributeBindings: [
    'disabled',
    'for',
    'type'
  ],

  classNames: [
    'mdl-button',
    'mdl-js-button'
  ],

  classNameBindings: [
    'isAccent:mdl-button--accent',
    'isButtonIcon:mdl-button--icon',
    'isColored:mdl-button--colored',
    'isRaised:mdl-button--raised',
    'isFab:mdl-button--fab',
    'isFabMini:mdl-button--mini-fab',
    'isIcon:mdl-button--icon'
  ],

  type: 'button',

  disabled: or('isDisabled'),

  click() {
    this.sendAction();
  },

  didInsertElement() {
    let mdl = new window.MaterialButton(this.element);
    set(this, '__mdlComponent', mdl);

    if (get(this, 'isRipple')) {
      this.initRipple(this.element);
    }
  },

  didReceiveAttrs() {
    let { isAccent, isColored, isFab, isFabMini } = this;
    isFab = isFabMini ? isFabMini : isFab;
    isColored = isAccent ? isAccent : isColored;
    setProperties(this, {
      isFab,
      isColored
    });
  }
});

MdlButton.reopenClass({
  positionalParams: ['text']
});

export default MdlButton;
