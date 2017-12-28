import Component from '@ember/component';
import layout from '../templates/components/mdl-tabs';
import { set } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';

export default Component.extend({
  layout,

  classNames: [
    'mdl-tabs',
    'mdl-js-tabs',
    'mdl-js-ripple-effect'
  ],

  didReceiveAttrs() {
    scheduleOnce('afterRender', this, function() {
      let mdl = new window.MaterialTabs(this.element);
      set(this, '__mdlComponent', mdl);
    });
  }
});
