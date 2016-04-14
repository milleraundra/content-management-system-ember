import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },
  actions: {
    update(post) {
      post.save();
      this.transitionTo('edit-site', post.get('site').get('id'));
    },
    delete(post) {
      post.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
