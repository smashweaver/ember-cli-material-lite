import Component from '@ember/component';
import layout from '../templates/components/mdl-menu';
import { computed, set } from '@ember/object';

export default Component.extend({
  layout,

  icon: "more_vert",

  _alignClass: computed('isBottomLeft','isBottomRight','isTopLeft','isTopRight', function() {
    let { isBottomLeft, isBottomRight, isTopLeft, isTopRight } = this;
    if (isBottomLeft) { return 'mdl-menu--bottom-left' }
    if (isBottomRight) { return 'mdl-menu--bottom-right' }
    if (isTopLeft) { return 'mdl-menu--top-left' }
    if (isTopRight) { return 'mdl-menu--top-right' }
    return 'mdl-menu--bottom-left';
  }),

  _buttonId: computed(function() {
    return `${this.elementId}-button`;
  }),

  didInsertElement() {
    let [element] = this.$('ul');
    let mdl = new window.MaterialMenu(element);
    set(this, '__mdlComponent', mdl);
  }
});
