import Component from '@ember/component';
import layout from '../templates/components/mdl-tabs-panel';

export default Component.extend({
  layout,

  classNames: ['mdl-tabs__panel'],

  classNameBindings: ['isActive:is-active']
});
