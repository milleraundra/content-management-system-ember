import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    goToSite(site) {
      this.sendAction('goToSite', site);
    },
  }
});
