import Component from '@ember/component';
import layout from '../templates/components/mdl-layout-tab-bar';

export default Component.extend({
  layout,

  classNames: [
    'mdl-layout__tab-bar',
    'mdl-js-ripple-effect'
  ]
});
