import Component from '@ember/component';
import layout from '../templates/components/mdl-layout';
import { set } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';

export default Component.extend({
  layout,

  classNames: [
    'mdl-layout',
    'mdl-js-layout'
  ],

  classNameBindings: [
    'hasFixedHeader:mdl-layout--fixed-header',
    'hasFixedDrawer:mdl-layout--fixed-drawer',
    'hasFixedTabs:mdl-layout--fixed-tabs',
    'hasNoDesktopDrawerButton:mdl-layout--no-desktop-drawer-button',
    'hasNoDrawerButton:mdl-layout--no-drawer-button'
  ],

  didReceiveAttrs() {
    scheduleOnce('afterRender', this, function() {
      let mdl = new window.MaterialLayout(this.element);
      set(this, '__mdlComponent', mdl);
    });
  }
});
