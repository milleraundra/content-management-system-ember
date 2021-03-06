import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('site', params.site_id);
  },
  actions: {
    newPost(site) {
      this.transitionTo('/' + site.id + '/new-post/');
    },

    goToEditPost(post) {
      this.transitionTo('edit-post', post.id);
    },


    delete(site) {
      var post_deletions = site.get('posts').map(function(post) {
        return post.destroyRecord();
      });
      Ember.RSVP.all(post_deletions).then(function() {
        return site.destroyRecord();
      });
      this.transitionTo('admin');
    }
  }
});
