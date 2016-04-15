import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update() {
      var params = {
        title: this.get('post.title'),
        author: this.get('post.author'),
        content: this.get('post.content'),
        image: this.get('post.image')
      };
      var post = this.get('post');
      this.sendAction('update', post, params);
    },
    delete() {
      var post = this.get('post');
      this.sendAction('delete', post);
    }
  }
});
