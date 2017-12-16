import Controller from '@ember/controller';
import { computed, get, set } from '@ember/object';

export default Controller.extend({
  foo: 'first',

  actionResult: computed(function() {
    return JSON.stringify(get(this, 'fruits'),  null, 2);
  }),

  fooResult: computed(function() {
    let foo = get(this, 'foo');
    return JSON.stringify({ foo },  null, 2);
  }),

  init() {
    this._super(...arguments);
    set(this, 'fruits', {
      apple: true,
      banana: false,
      citrus: true,
      durian: false
    });
  },

  actions: {
    someAction(key, value) {
      let fruits = get(this, 'fruits');
      set(fruits, key,value);
      this.notifyPropertyChange('actionResult');
    },

    changeFoo(value) {
      set(this, 'foo', value);
      this.notifyPropertyChange('fooResult');
    }
  }
});
