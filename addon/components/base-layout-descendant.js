import Component from '@ember/component';

const BaseLayoutDescendant = Component.extend({
  classNameBindings: [
    'isLargeScreenOnly:mdl-layout--large-screen-only',
    'isSmallScreenOnly:mdl-layout--small-screen-only'
  ]
});


export { BaseLayoutDescendant };
