import Component from '@ember/component';
import layout from '../templates/components/mdl-badge';
import { get } from '@ember/object';

const MdlBadge = Component.extend({
  layout,

  attributeBindings: ['badge:data-badge'],

  classNames: ['mdl-badge'],

  classNameBindings: [
    'isIcon:material-icons',
    'isOverlap:mdl-badge--overlap',
    'isBackground::mdl-badge--no-background'
  ],

  isBackground: true,

  tagName: 'span',

  didInsertElement() {
    if (!get(this, 'hasBlock')) {
      this.$().text(get(this, 'anchor'));
    }
  }
});

MdlBadge.reopenClass({
  positionalParams: ['badge', 'anchor']
});

export default MdlBadge;
