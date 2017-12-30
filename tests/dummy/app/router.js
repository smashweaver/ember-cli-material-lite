import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('components', function() {
    this.route('badges');
    this.route('buttons');
    this.route('chips');
    this.route('loading');
    this.route('layout');
    this.route('menus');
    this.route('slider');
    this.route('snackbar');
    this.route('text-fields');
    this.route('toggles');
    this.route('tooltip');
  });
});

export default Router;
