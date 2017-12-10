import { BaseLayoutDescendant } from './base-layout-descendant';
import layout from '../templates/components/mdl-layout-header';
import { computed, set } from '@ember/object';
import Ember$ from 'jquery';

export default BaseLayoutDescendant.extend({
  layout,

  classNames: ['mdl-layout__header'],

  classNameBindings: [
    '_hidden:hidden',
    'isScroll:mdl-layout__header--scroll',
    'isWaterfall:mdl-layout__header--waterfall',
    'isHideTop:mdl-layout__header--waterfall-hide-top',
    'isTransparent:mdl-layout__header--transparent',
    'isSeamed:mdl-layout__header--seamed'
  ],

  tagName: 'header',

  _hidden: false,

  isHidden: computed({
    set(_, value) {
      if (value) {
        // hack to close obfuscator if open
        let el = Ember$('.mdl-layout__obfuscator');
        if (el.hasClass('is-visible')) {
          el.trigger('click');
        }
      }

      set(this, '_hidden', value);
    }
  })
});
