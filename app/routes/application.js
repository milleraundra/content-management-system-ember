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
        debugger;
        return data.currentUser;
      });
    },
    signOut: function() {
      this.get("session").close();
    }
  }
});
