import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    goToEditSite(site) {
      this.sendAction('goToEditSite', site);
    }
  }
});
