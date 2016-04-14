import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      sites: this.store.query('site', {
        orderBy: 'admin',
        equalTo: this.get('session').get('uid')
      })
    });
  },
  actions: {
    transitionTo(param) {
      this.transitionTo(param);
    },
    goToEditSite(site) {
      this.transitionTo('edit-site', site.id)
    }
  }
});
