import Component from '@ember/component';
import layout from '../templates/components/mdl-badge';

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

  tagName: 'span'
});

MdlBadge.reopenClass({
  positionalParams: ['badge']
});

export default MdlBadge;
