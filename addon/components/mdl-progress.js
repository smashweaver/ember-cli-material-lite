import Component from '@ember/component';
import layout from '../templates/components/mdl-progress';
import { set } from '@ember/object';
import { run } from '@ember/runloop';

export default Component.extend({
  layout,

  classNames: [
    'mdl-progress',
    'mdl-js-progress'
  ],

  classNameBindings: ['isIndeterminate:mdl-progress__indeterminate'],

  didInsertElement() {
    let mdl = new window.MaterialProgress(this.element);
    set(this, '__mdlComponent', mdl);
    this._showProgress();
  },

  didUpdateAttrs() {
    this._showProgress();
  },

  _showProgress() {
    let { __mdlComponent, progress, buffer } = this;
    progress = progress || 0;
    buffer = buffer || 100;
    if (__mdlComponent) {
      run(this, function() {

      });
      __mdlComponent.setProgress(progress);
        __mdlComponent.setBuffer(buffer);
    }
  }
});
