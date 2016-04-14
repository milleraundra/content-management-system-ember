import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      site: this.store.findRecord('site', params.site_id),
    });
  },
  actions: {
    save(params) {
      var newPost = this.store.createRecord('post', params);
      var site = params.site;
      site.get('posts').addObject(newPost);
      newPost.save().then(function() {
        site.save();
      });
      this.transitionTo('edit-site', site.id);
    },
    transitionToSite(site) {
      this.transitionTo("edit-site", site.id)
    }
  }
});
