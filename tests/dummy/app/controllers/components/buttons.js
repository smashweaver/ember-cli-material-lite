import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    logAction(value) {
      alert(value);
    }
  }
});
