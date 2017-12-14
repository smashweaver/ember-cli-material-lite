import Component from '@ember/component';
import layout from '../templates/components/mdl-menu-item';
import RippleSupport from '../mixins/ripple-support';
import { or } from '@ember/object/computed';
import { scheduleOnce } from '@ember/runloop';

export default Component.extend(RippleSupport, {
  layout,

  tagName: 'li',

  attributeBindings: ['disabled'],

  classNames: ['mdl-menu__item'],

  classNameBindings: ['isFullBleedDivider:mdl-menu__item--full-bleed-divider'],

  disabled: or('isDisabled'),

  didInsertElement() {
    scheduleOnce('afterRender', this, function() {
      this.initRipple(this.element);
    });
  }
});
