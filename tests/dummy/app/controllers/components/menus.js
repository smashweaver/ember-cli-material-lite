import Controller from '@ember/controller';
import { set } from '@ember/object';
import { or } from '@ember/object/computed';

export default Controller.extend({
  actionResult: or('value'),

  otherActionResult: or('otherValue'),

  actions: {
    menuAction(value) {
      set(this, 'value', value);
    },

    otherMenuAction(value) {
      set(this, 'otherValue', value);
    }
  }
});
