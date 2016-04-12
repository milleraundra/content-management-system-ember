import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return Ember.RSVP.hash({
    sites: this.store.findAll('site'),
    posts: this.store.findAll('post')
    });
  }
});
