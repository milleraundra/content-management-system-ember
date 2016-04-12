import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(post) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
      };
      this.sendAction('update', post, params);
    },
    delete(post) {
      this.sendAction('delete', post)
    }
  }
});
