import Ember from 'ember';
import Firebase from 'firebase';

export default Ember.Component.extend({
  actions: {
    newUser() {
      var username = this.get('username');
      var email = this.get('email');
      var password =this.get('password');
      this.sendAction('createUser', username, email, password);
    }
  }
});
