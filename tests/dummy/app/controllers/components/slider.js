import Controller from '@ember/controller';
import { computed, set, setProperties } from '@ember/object';

export default Controller.extend({
  sliderResult: computed('slider1', 'slider2', function() {
    let { slider1, slider2 } = this;
    return JSON.stringify({ slider1, slider2 }, null, 2);
  }),

  init() {
    this._super(...arguments);
    setProperties(this, {
      slider1: 0,
      slider2: 25
    });
  },

  actions: {
    logUpdate(prop, value) {
      set(this, prop, value);
      this.notifyPropertyChange(prop);
    },

    reset() {
      setProperties(this, {
        slider1: 0,
        slider2: 25
      });
    }
  }
});