import { module, test } from 'qunit';

module('Unit | Utility | material design lite');

[
  'MaterialButton',
  'MaterialCheckbox',
  'MaterialDataTable',
  'MaterialIconToggle',
  'MaterialLayout',
  'MaterialMenu',
  'MaterialProgress',
  'MaterialRadio',
  'MaterialSlider',
  'MaterialSnackbar',
  'MaterialSpinner',
  'MaterialSwitch',
  'MaterialTabs',
  'MaterialTextfield',
  'MaterialTooltip',
].forEach(component => {
  test(`it exposes global '${component}' object`, function(assert) {
    assert.ok(window[component]);
  });
});