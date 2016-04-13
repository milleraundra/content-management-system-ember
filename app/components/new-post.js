import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        content: this.get('content'),
        site: this.get('site')
      };
      this.sendAction('save', params);
    }
  }
});
