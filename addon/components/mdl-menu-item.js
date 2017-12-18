import Component from '@ember/component';
import RippleSupport from '../mixins/ripple-support';
import layout from '../templates/components/mdl-menu-item';
import { get } from '@ember/object';
import { or } from '@ember/object/computed';
import { scheduleOnce } from '@ember/runloop';

export default Component.extend(RippleSupport, {
  layout,

  tagName: 'li',

  attributeBindings: ['disabled'],

  classNames: ['mdl-menu__item'],

  classNameBindings: ['isFullBleedDivider:mdl-menu__item--full-bleed-divider'],

  disabled: or('isDisabled'),

  click() {
    get(this, 'action')();
  },

  didInsertElement() {
    scheduleOnce('afterRender', this, function() {
      this.initRipple(this.element);
    });
  }
});
