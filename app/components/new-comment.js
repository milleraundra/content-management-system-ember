import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      var params = {
        name: this.get('name'),
        email: this.get('email'),
        comment: this.get('comment'),
        post: this.get('post')
      };
      this.sendAction('submit', params);
    }
  }
});
