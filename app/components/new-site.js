import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        title: this.get('title'),
      };
      this.sendAction('save', params);
    }
  }
});
