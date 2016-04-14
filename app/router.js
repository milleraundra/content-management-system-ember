import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('new-site');
  this.route('new-post', {path: ':site_id/new-post'});
  this.authenticatedRoute('admin');
  this.route('edit-post', {path: '/edit-post/:post_id'});
  this.route('edit-site', {path: '/edit-site/:site_id'});
  this.route('site', {path: '/:site_id'});
  this.route('view-post', {path: '/view-post/:post_id'});
});

export default Router;
