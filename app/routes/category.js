import Ember from 'ember';

export default Ember.Route.extend({
  model(param) {
    return this.store.query('site', {
      orderBy: 'category',
      equalTo: param.site_category
    });
  },
  actions: {
    goToSite(site) {
      console.log(site.id);
      this.transitionTo("/" + site.id);
    },
  }
});
