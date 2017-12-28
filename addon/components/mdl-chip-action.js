import Component from '@ember/component';
import layout from '../templates/components/mdl-chip-action';

export default Component.extend({
  layout,

  classNames: ['mdl-chip__action'],

  tagName: 'button',

  click(e) {
    e.stopPropagation();

    let { action } = this;
    if (action) {
      action();
    }
  }
});
