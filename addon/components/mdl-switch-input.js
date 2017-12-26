import Component from '@ember/component';
import layout from '../templates/components/mdl-switch-input';
import { get } from '@ember/object';
import { or } from '@ember/object/computed';

export default Component.extend({
  layout,

  attributeBindings: ['id', 'checked', 'type', 'disabled'],

  classNames: ['mdl-switch__input'],

  tagName: 'input',

  type: 'checkbox',

  checked: or('isChecked'),

  disabled: or('isDisabled'),

  change(e) {
    get(this, 'update')(e.target.checked);
  }
});