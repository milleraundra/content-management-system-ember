import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        title: this.get('title') ? this.get('title') : "Title",
        author: this.get('author') ? this.get('author') : "Anonymous",
        content: this.get('content') ? this.get('content') : " ",
        date: new Date(),
        image: this.get('image') ? this.get('image') : "",
        site: this.get('site')
      };
      this.sendAction('save', params);
    }
  }
});
