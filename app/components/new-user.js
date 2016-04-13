import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newUser() {
      var ref = new Firebase("https://ember-cms.firebaseio.com/");
      var _this = this;
      var username = this.get('username');
      ref.createUser({
        email: this.get('email'),
        password : this.get('password')
      }, function(error) {
        if (error) {
          alert("Error creating user:", error);
        } else {
          console.log("Successfully created user account for authentication.");
        }
      }).then(function(userData){
        var user = {
          id: userData.uid,
          username: username
        };
        _this.sendAction('createUser', user);
      });
    }
  }
});
