import Component from '@ember/component';
import layout from '../templates/components/mdl-tooltip';
import { set } from '@ember/object';

export default Component.extend({
  layout,

  attributeBindings: ['for'],

  classNames: ['mdl-tooltip'],

  classNameBindings: [
    'isLarge:mdl-tooltip--large',
    'isLeft:mdl-tooltip--left',
    'isRight:mdl-tooltip--right',
    'isTop:mdl-tooltip--top',
    'isBottom:mdl-tooltip--bottom'
  ],

  tagName: 'span',

  didInsertElement() {
    let mdl = new window.MaterialTooltip(this.element);
    set(this, '__mdlComponent', mdl);
  }
});
