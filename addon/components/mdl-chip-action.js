import Component from '@ember/component';
import layout from '../templates/components/mdl-chip-action';

const MdlChipAction = Component.extend({
  layout,

  attributeBindings: ['type'],

  classNames: ['mdl-chip__action'],

  tagName: 'button',

  icon: 'cancel',

  type: 'button',

  click(e) {
    e.stopPropagation();

    let { action } = this;
    if (action) {
      action();
    }
  }
});


MdlChipAction.reopenClass({
  positionalParams: ['icon']
});

export default MdlChipAction;
