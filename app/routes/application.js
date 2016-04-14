import Ember from 'ember';
import Firebase from 'firebase';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },

  actions: {
    transitionTo(param) {
      this.transitionTo(param);
    },

    signIn: function(email, password, provider) {
      this.get("session").open("firebase", {
        provider: provider,
        email: email,
        password: password
      }).then(function(data) {
          console.log(data.currentUser);
          this.transitionTo('admin');
      }, function(error){
        alert(error);
      }.bind(this));
    },

    signOut: function() {
      this.get("session").close();
      this.transitionTo('index');
    },

    createUser: function(username, email, password) {
      var ref = new Firebase("https://ember-cms.firebaseio.com/");
      var _this = this;
      ref.createUser({
        email: email,
        password: password
      }, function(error, userData){
        if (error) {
          alert(error);
        } else {
          _this.get('session').open('firebase', {
            provider: 'password',
            'email': email,
            'password': password
          }).then(function(){
            var user = _this.store.createRecord('user', {
              id: userData.uid,
              username: username
            });
            user.save();
          });
        }
      });
    },
    accessDenied() {
      alert("Access Denied. Please login or create an account");
      return this.transitionTo('index');
    }
  }
});
