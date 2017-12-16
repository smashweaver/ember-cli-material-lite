import Component from '@ember/component';
import layout from '../templates/components/mdl-radio-button';
import { get, set } from '@ember/object';
import { or } from '@ember/object/computed';

export default Component.extend({
  layout,

  attributeBindings: ['id', 'type', 'disabled', 'name', 'value', 'checked'],

  classNames: ['mdl-radio__button'],

  tagName: 'input',

  type: 'radio',

  checked: or('isChecked'),

  disabled: or('isDisabled'),

  change(e) {
    get(this, 'update')(e.target.value)
  },

  didReceiveAttrs() {
    let { value, groupValue } = this;
    set(this, 'isChecked', value === groupValue);
  },

  didUpdateAttrs() {
    let { value, groupValue } = this;
    set(this, 'isChecked', value === groupValue);
  }
});
