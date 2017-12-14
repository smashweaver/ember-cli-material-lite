import Mixin from '@ember/object/mixin';
import { set } from '@ember/object';

export default Mixin.create({
  classNameBindings: ['isRipple:mdl-js-ripple-effect'],

  initRipple(rippleContainer) {
    if (rippleContainer) {
      let mdlRipple = new window.MaterialRipple(rippleContainer);
      set(this, '__mdlRipple', mdlRipple);
    }
  }
});