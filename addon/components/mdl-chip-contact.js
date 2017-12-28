import Component from '@ember/component';
import layout from '../templates/components/mdl-chip-contact';
import { get, set } from '@ember/object';

const MdlChipContact = Component.extend({
  layout,

  attributeBindings: ['param:src'],

  classNames: ['mdl-chip__contact'],

  tagName: 'span',

  init() {
    this._super(...arguments);
    let { isImage } = this;
    if (isImage) {
      set(this, 'tagName', 'img');
    }
  },

  didInsertElement() {
    let { isImage } = this;
    if (!isImage) {
      this.$().text(get(this, 'param'));
    }
  }
});

MdlChipContact.reopenClass({
  positionalParams: ['param']
});

export default MdlChipContact;
