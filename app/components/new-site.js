import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        title: this.get('title'),
        description: this.get('description'),
        category: this.get('category')
      };
      this.sendAction('save', params);
    }
  }
});
