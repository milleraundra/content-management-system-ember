import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('new-site');
  this.route('new-post');
  this.route('admin');
});

export default Router;
