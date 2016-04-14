import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(post) {
      this.sendAction('update', post);
    },
    delete(post) {
      this.sendAction('delete', post);
    }
  }
});
