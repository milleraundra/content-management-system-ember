import Ember from 'ember';

export default Ember.Route.extend({
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
        // console.log(data.currentUser);
      });
    },
    signOut: function() {
      this.get("session").close();
    },
    createUser(user) {
      console.log('fired');
      var newUser = this.store.createRecord('user', user);
      newUser.save();
    }
  }
});
