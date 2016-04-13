import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      site: this.store.findRecord('site', params.site_id),
      posts: this.store.query('post', {
        orderBy: 'site',
        equalTo: params.site_id
      })
    });
  },
  actions: {
    saveNewPost(params) {
      var newPost = this.store.createRecord('post', params);
      var site = params.site;
      newPost.save().then(function() {
        site.get('posts').addObject(newPost);
      });
    }
  }
});
