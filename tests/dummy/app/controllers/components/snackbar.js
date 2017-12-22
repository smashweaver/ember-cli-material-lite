import Controller from '@ember/controller';
import jquery from 'jquery';
import { MaterialSnackbarContainer } from 'ember-cli-material-lite/components/mdl-snackbar';
import { get, set } from '@ember/object';

export default Controller.extend({
  counter: 0,

  actions: {
    showMessageWithAction() {
      let [button] = jquery('.snackbar-button');
      button.style.backgroundColor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);

      let handler = () => {
        button.style.backgroundColor = '';
      };

      let data = {
        message: 'Button color changed.',
        timeout: 2000,
        actionHandler: handler,
        actionText: 'Undo'
      };

      MaterialSnackbarContainer.showSnackbar(data);
    },

    showMessage() {
      let counter = get(this, 'counter') + 1;
      MaterialSnackbarContainer.showSnackbar({
        message: `Example message # ${counter}`
      });
      set(this, 'counter', counter);
    }
  }
});
