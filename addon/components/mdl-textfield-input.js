import Component from '@ember/component';
import layout from '../templates/components/mdl-textfield-input';
import { get } from '@ember/object';
import { or } from '@ember/object/computed';

export default Component.extend({
  layout,

  attributeBindings: ['id', 'type', 'disabled', 'value', 'pattern'],

  classNames: ['mdl-textfield__input'],

  tagName: 'input',

  type: 'text',

  disabled: or('isDisabled'),

  input(e) {
    get(this, 'update')(e.target.value);
  }
});
