import Ember from 'ember';

export default Ember.Service.extend({
  currentUser: undefined,
  signIn(user) {
    this.set('currentUser', user);
  }
});
