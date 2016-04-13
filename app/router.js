import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('new-site');
  this.route('new-post');
  this.route('admin');
  this.route('edit-post', {path: '/edit-post/:post.id'});
  this.route('edit-site', {path: '/edit-site/:site.id'});
});

export default Router;
