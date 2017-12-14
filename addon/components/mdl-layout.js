import Component from '@ember/component';
import layout from '../templates/components/mdl-layout';
import { set } from '@ember/object';

export default Component.extend({
  layout,

  classNames: [
    'mdl-layout',
    'mdl-js-layout'
  ],

  classNameBindings: [
    'hasFixedHeader:mdl-layout--fixed-header',
    'hasNoDesktopDrawerButton:mdl-layout--no-desktop-drawer-button',
    'hasNoDrawerButton:mdl-layout--no-drawer-button',
    'hasFixedDrawer:mdl-layout--fixed-drawer'
  ],

  didInsertElement() {
    let mdl = new window.MaterialLayout(this.element);
    set(this, '_mdlComponent', mdl);
  }
});
