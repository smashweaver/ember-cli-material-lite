import Component from '@ember/component';
import layout from '../templates/components/mdl-button';
import RippleSupport from '../mixins/ripple-support';
import { get, set, setProperties } from '@ember/object';
import { or } from '@ember/object/computed';

export default Component.extend(RippleSupport, {
  layout,

  tagName: 'button',

  classNames: [
    'mdl-button',
    'mdl-js-button'
  ],

  attributeBindings: ['disabled', 'for'],

  classNameBindings: [
    '__p.isAccent:mdl-button--accent',
    '__p.isButtonIcon:mdl-button--icon',
    '__p.isColored:mdl-button--colored',
    '__p.isRaised:mdl-button--raised',
    '__p.isFab:mdl-button--fab',
    '__p.isFabMini:mdl-button--mini-fab',
    '__p.isIcon:mdl-button--icon'
  ],

  disabled: or('__p.isDisabled'),

  for: or('__p.isFor'),

  init() {
    this._super(...arguments);
    set(this, '__p', {});
  },

  click() {
    this.sendAction();
  },

  didInsertElement() {
    let mdl = new window.MaterialButton(this.element);
    set(this, '__mdlComponent', mdl);

    if (get(this, '__p.isRipple')) {
      let mdlRipple = new window.MaterialRipple(this.element);
      set(this, '__mdlRipple', mdlRipple);
    }
  },

  didReceiveAttrs() {
    this._initParams();
  },

  didUpdateAttrs() {
    this._initParams();
  },

  _initParams() {
    let { isAccent, isButtonIcon, isColored, isIcon, isRaised, isFab, isFabMini, isDisabled, isFor, isRipple, __p } = this;
    isFab = isFabMini ? isFabMini : isFab;
    isColored = isAccent ? isAccent : isColored;
    setProperties(__p, {
      isAccent,
      isButtonIcon,
      isColored,
      isIcon,
      isRaised,
      isFab,
      isFabMini,
      isDisabled,
      isFor,
      isRipple
    });
  }
});
