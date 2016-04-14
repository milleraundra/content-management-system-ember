import Ember from 'ember';

export default Ember.Component.extend({
  newUserForm: false,
  loginForm: false,
  actions: {
    createUserFormToggle() {
      this.toggleProperty('newUserForm');
    },
    loginFormToggle() {
      this.toggleProperty('loginForm');
    },
    newUser() {
      var username = this.get('username');
      var email = this.get('email');
      var password =this.get('password');
      this.set('newUserForm', false);
      this.sendAction('createUser', username, email, password);
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
