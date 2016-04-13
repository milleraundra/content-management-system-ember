import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // return this.RSVP.hash({
    //   site: this.store.findRecord('site', params.site.id),
    //   posts: this.store.query('post', {
    //     orderBy: 'site',
    //     equalTo: params.site.id
    //   })
    // });
  },
  actions: {
    saveNewPost(params) {
      var newPost = this.store.createRecord('post', {
        title: params.title,
        author: params.author,
        content: params.content,
        site: //GET SESSION ID
      })
    }
  }
});
