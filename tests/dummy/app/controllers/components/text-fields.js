import Controller from '@ember/controller';
import { computed, set, get } from '@ember/object';

export default Controller.extend({
  textValue: '',
  numberValue: '',
  disabledValue: '',
  someValue: '',
  someNumberValue: '',

  inputResult: computed('textValue', 'numberValue', function() {
    let { textValue, numberValue } = this;
    return JSON.stringify({ textValue, numberValue }, null, 2);
  }),

  isSomeError: computed('someValue', function() {
    let value = get(this, 'someValue');
    if (value === '') {
      return false;
    }

    return value !== 'some';
  }),

  actions: {
    updatedTextValue(value) {
      set(this, 'textValue', value);
    },

    updatedNumberValue(value) {
      set(this, 'numberValue', value);
    }
  }
});
