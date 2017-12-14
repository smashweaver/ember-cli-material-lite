import Component from '@ember/component';
import layout from '../templates/components/mdl-spinner';
import { set } from '@ember/object';

export default Component.extend({
  layout,

  classNames: [
    'mdl-spinner',
    'mdl-js-spinner'
  ],

  classNameBindings: [
    'isActive:is-active',
    'isSingleColor:mdl-spinner--single-color'
  ],

  didInsertElement() {
    let mdl = new window.MaterialSpinner(this.element);
    set(this, '__mdlComponent', mdl);
  }
});
