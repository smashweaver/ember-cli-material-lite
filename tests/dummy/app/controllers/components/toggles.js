import Controller from '@ember/controller';
import { computed, get, set, setProperties } from '@ember/object';

export default Controller.extend({
  checkboxResult: computed(function() {
    return JSON.stringify(get(this, 'fruits'),  null, 2);
  }),

  radioResult: computed(function() {
    let foo = get(this, 'foo');
    return JSON.stringify({ foo },  null, 2);
  }),

  switchResult: computed(function() {
    return JSON.stringify(get(this, 'switches'),  null, 2);
  }),

  init() {
    this._super(...arguments);
    setProperties(this, {
      foo: 'first',
      fruits: {
        apple: true,
        banana: false,
        citrus: false
      },
      switches: {
        first: true,
        second: false
      }
    });
  },

  actions: {
    radioAction(value) {
      set(this, 'foo', value);
      this.notifyPropertyChange('radioResult');
    },

    checkboxAction(key, value) {
      let fruits = get(this, 'fruits');
      set(fruits, key, value);
      this.notifyPropertyChange('checkboxResult');
    },

    switchAction(key, value) {
      let switches = get(this, 'switches');
      set(switches, key, value);
      this.notifyPropertyChange('switchResult');
    }
  }
});
