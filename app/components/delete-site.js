import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(site) {
      if (confirm("Are you sure you want to delete this site?")) {
        this.sendAction('delete', site);
      }
    }
  }
});
