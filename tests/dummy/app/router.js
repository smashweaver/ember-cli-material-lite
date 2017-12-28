import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('components', function() {
    this.route('buttons');
    this.route('loading');
    this.route('layout');
    this.route('menus');
    this.route('snackbar');
    this.route('toggles');
    this.route('text-fields');
  });
});

export default Router;
