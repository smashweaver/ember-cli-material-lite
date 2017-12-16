/* eslint-env node */
'use strict';

const path = require('path');
const funnel = require('broccoli-funnel');
const merge = require('broccoli-merge-trees');

const jsFiles = [
  'button.js',
  'checkbox.js',
  'data-table.js',
  'icon-toggle.js',
  'layout.js',
  'menu.js',
  'progress.js',
  'radio.js',
  'ripple.js',
  'slider.js',
  'snackbar.js',
  'spinner.js',
  'switch.js',
  'tabs.js',
  'textfield.js',
  'rAF.js',
  'tooltip.js'
];

const svgFiles = [
  'buffer.svg',
  'tick-mask.svg',
  'tick.svg'
];

module.exports = {
  name: 'ember-cli-material-lite',

  included() {
    this._super.included.apply(this, arguments);

    let host = findHost(this);
    host.import('vendor/componentHandlerShim.js');
    jsFiles.forEach(fileName => host.import(`vendor/mdl/${fileName}`));
    svgFiles.forEach(fileName => host.import(`vendor/images/${fileName}`, { destDir: 'images' }));
  },

  treeForVendor(vendorTree) {
    let trees = [];
    let mdlPath = path.join(this.project.root, 'node_modules', 'material-design-lite', 'src');
    let mdlTree = funnel(mdlPath, {
      include: ['**/*.js'],
      exclude: ['mdlComponentHandler.js', 'animation/demo.js'],
      destDir: 'mdl',
      getDestinationPath(relativePath) {
        let fileName = path.basename(relativePath);
        return fileName;
      }
    });

    let svgTree = funnel(mdlPath, {
      srcDir: 'images',
      include: ['**/*.svg'],
      destDir: 'images'
    });

    if (vendorTree !== undefined) {
      trees.push(vendorTree);
    }

    trees.push(mdlTree);
    trees.push(svgTree);
    return merge(trees);
  }
};

function findHost(addon) {
  let current = addon;
  let app;

  do {
    app = current.app || app;
  } while (current.parent.parent && (current = current.parent));

  return app;
}
