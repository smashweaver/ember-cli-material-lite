import Component from '@ember/component';
import layout from '../templates/components/mdl-textfield';
import { computed, get, set } from '@ember/object';
import { next } from '@ember/runloop';

const isNumeric = (value) => /^[0-9]*(.[0-9]+)*$/.test(value);

let MdlTextfield = Component.extend({
  layout,

  classNames: [
    'mdl-textfield',
    'mdl-js-textfield'
  ],

  classNameBindings: [
    'isAlignRight:mdl-textfield--align-right',
    'isExpandable:mdl-textfield--expandable',
    'isFloatingLabel:mdl-textfield--floating-label'
  ],

  isNumberError: computed('value', 'isNumeric', function() {
    let value = get(this, 'value');
    return get(this, 'isNumeric') ? !isNumeric(value) : false;
  }),

  _label: computed('params.[]', function() {
    let [label] = get(this, 'params') || '';
    return label;
  }),

  _textfieldId: computed(function() {
    return `${this.elementId}-textfield`;
  }),

  _textFieldType: computed('type', function() {
    return get(this, 'type') || 'text';
  }),

  _errorText: computed('isNumeric', 'isError', 'message', function() {
    if (get(this, 'isError')) {
      return get(this, 'message') || get(this, 'error') || 'Invalid input!';
    } else if (get(this, 'isNumeric')) {
      return 'Invalid number input!';
    }
  }),

  _pattern: computed('isNumeric', function() {
    return get(this, 'isNumeric') ? '-?[0-9]*(.[0-9]+)?' : null;
  }),

  init() {
    this._super(...arguments);
    set(this, '__p', {});
  },

  didInsertElement() {
    let mdl = new window.MaterialTextfield(this.element);
    set(this, '__mdlComponent', mdl);
  },

  didReceiveAttrs() {
    let { value } = this;
    set(this, '__p.value', value);
  },

  didUpdateAttrs() {
    let { value } = this.attrs.value;
    if (get(this, '__p.value') !== value) {
      set(this, '__p.value', value);
      this._handleChange();
    }
  },

  willDestroyElement() {
    this.$('.mdl-textfield__input').off();
  },

  _handleChange() {
    let isError = get(this, 'isError');
    let isNumberError = get(this, 'isNumberError');
    if (isError || isNumberError) {
      this.$().addClass('is-invalid');
    } else {
      this.$().removeClass('is-invalid');
    }
  },

  _invokeHandler(value) {
    let updateHandler = get(this, 'update');
    if (updateHandler) {
      updateHandler(value);
    }
  },

  actions: {
    update(value) {
      this._invokeHandler(value);
    }
  }
});

MdlTextfield.reopenClass({
  positionalParams: 'params'
});

export default MdlTextfield;
