import Ember from 'ember';

export default Ember.Component.extend({
  newUserForm: false,
  actions: {
    createUserFormToggle() {
      this.set('newUserForm', true);
    },
    newUser() {
      var username = this.get('username');
      var email = this.get('email');
      var password =this.get('password');
      this.set('newUserForm', false);
      this.sendAction('createUser', username, email, password);
    }
  }
});
