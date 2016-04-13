import Ember from 'ember';

export default Ember.Component.extend({
  loginForm: false,
  actions: {
    loginFormToggle() {
      this.set('loginForm', true);
    },
    signIn() {
      var email = this.get('email');
      var password = this.get('password');
      var provider = "password";
      this.set('loginForm', false);
      this.sendAction('signIn', email, password, provider);
    }
  }
});
