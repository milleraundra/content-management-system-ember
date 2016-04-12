import Ember from 'ember';

export default Ember.Route.extend({
  userModel: Ember.inject.service(),
  beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },
  actions: {
    signIn: function(email, password, provider) {
      this.get("session").open("firebase", {
        provider: provider,
        email: email,
        password: password
      }).then(function(data) {
        this.store.findRecord('user', data.uid).then(function(record) {
          console.log(this.userModel.get('currentUser'));
        }.bind(this));
      }.bind(this));
    },
    signOut: function() {
      this.get("session").close();
    },
    createUser(user) {
      var newUser = this.store.createRecord('user', user);
      newUser.save();
    }
  }
});
