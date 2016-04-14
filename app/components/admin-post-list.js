import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    goToEditPost(post) {
      this.sendAction('goToEditPost', post);
    }
  }

});
