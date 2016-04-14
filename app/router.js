import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.authenticatedRoute('new-site');
  this.authenticatedRoute('new-post', {path: ':site_id/new-post'});
  this.authenticatedRoute('admin');
  this.authenticatedRoute('edit-post', {path: '/edit-post/:post_id'});
  this.authenticatedRoute('edit-site', {path: '/edit-site/:site_id'});
  this.route('site', {path: '/:site_id'});
  this.route('view-post', {path: '/view-post/:post_id'});
  this.route('category', {path: '/category/:site_category'});
});

export default Router;
