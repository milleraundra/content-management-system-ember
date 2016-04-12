import Ember from 'ember';
import Firebase from 'firebase';

export default Ember.Component.extend({
  actions: {
    newUser() {
      var ref = new Firebase("https://ember-cms.firebaseio.com/");
      ref.createUser({
        email: this.get('email'),
        password : this.get('password')
      }, function(error, userData) {
        if (error) {
          console.log("Error creating user:", error);
        } else {
          console.log("Successfully created user account with uid:", userData.uid);
        }
      });
    }
  }
});
