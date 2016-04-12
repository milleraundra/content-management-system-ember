import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      this.sendAction('delete', post);
    }
  }
});
