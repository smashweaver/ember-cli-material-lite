import Mixin from '@ember/object/mixin';
import { set } from '@ember/object';
import { or } from '@ember/object/computed';

export default Mixin.create({
  classNameBindings: ['hasRipple:mdl-js-ripple-effect'],

  hasRipple: or('__p.isRipple'),

  initRipple() {
    let [rippleContainer] = this.$('.mdl-button__ripple-container');
    if (rippleContainer) {
      let mdlRipple = new window.MaterialRipple(rippleContainer);
      set(this, '__mdlRipple', mdlRipple);
    }
  }
});