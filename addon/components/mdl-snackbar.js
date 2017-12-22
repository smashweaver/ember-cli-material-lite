import Component from '@ember/component';
import layout from '../templates/components/mdl-snackbar';

let MaterialSnackbarContainer;

export default Component.extend({
  layout,

  classNames: [
    'mdl-snackbar',
    'mdl-js-snackbar'
  ],

  didInsertElement() {
    MaterialSnackbarContainer = new window.MaterialSnackbar(this.element);
  }
});

export { MaterialSnackbarContainer };
