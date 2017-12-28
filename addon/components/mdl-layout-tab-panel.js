import Component from '@ember/component';
import layout from '../templates/components/mdl-layout-tab-panel';

export default Component.extend({
  layout,

  classNames: ['mdl-layout__tab-panel'],

  classNameBindings: ['isActive:is-active'],

  tagName: 'section'
});
