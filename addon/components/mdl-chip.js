import Component from '@ember/component';
import layout from '../templates/components/mdl-chip';
import { set } from '@ember/object';

const MdlChip = Component.extend({
  layout,

  classNames: ['mdl-chip'],

  classNameBindings: [
    'isDeletable:mdl-chip--deletable',
    'isContact:mdl-chip--contact'
  ],

  tagName: 'span',

  init() {
    this._super(...arguments);
    let { isButton } = this;
    if (isButton) {
      set(this, 'tagName', 'button');
    }
  },

  actions: {
    deleted() {
      let { deleted } = this;
      if (deleted) {
        deleted();
      }
    }
  }
});

MdlChip.reopenClass({
  positionalParams: ['text']
});

export default MdlChip;
