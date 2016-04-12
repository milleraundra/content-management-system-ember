import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('site');
  },
  actions: {
    save(params) {
      var newSite = this.store.createRecord('site', params);
      newSite.save();
      this.transitionTo('admin');
    }
  }
});
