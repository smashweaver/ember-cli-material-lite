import Component from '@ember/component';
import layout from '../templates/components/mdl-spinner';
import { set, setProperties } from '@ember/object';

export default Component.extend({
  layout,

  classNames: [
    'mdl-spinner',
    'mdl-js-spinner'
  ],

  classNameBindings: [
    '__p.isActive:is-active',
    '__p.isSingleColor:mdl-spinner--single-color'
  ],

  init() {
    this._super(...arguments);
    set(this, '__p', {});
  },

  didInsertElement() {
    let mdl = new window.MaterialSpinner(this.element);
    set(this, '__mdlComponent', mdl);
  },

  didReceiveAttrs() {
    let { isActive, isSingleColor, __p } = this;
    setProperties(__p, { isActive, isSingleColor });
  },

  didUpdateAttrs() {
    let { isActive, isSingleColor, __p } = this;
    setProperties(__p, { isActive, isSingleColor });
  }
});
