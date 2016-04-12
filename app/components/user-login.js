import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    signIn() {
      var email = this.get('email');
      var password = this.get('password');
      var provider = "password";
      this.sendAction('signIn', email, password, provider);
    }
  }
});
