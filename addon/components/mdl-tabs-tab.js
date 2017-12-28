import Component from '@ember/component';
import layout from '../templates/components/mdl-tabs-tab';
import RippleSupport from '../mixins/ripple-support';
import { scheduleOnce } from '@ember/runloop';

export default Component.extend(RippleSupport, {
  layout,

  classNames: ['mdl-tabs__tab'],

  classNameBindings: ['isActive:is-active'],

  attributeBindings: ['panel:href'],

  tagName: 'a',

  didReceiveAttrs() {
    scheduleOnce('afterRender', this, function() {
      let [rippleContainer] = this.$('.mdl-tabs__ripple-container');
      this.initRipple(rippleContainer);
    });
  }
});
