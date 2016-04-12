import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      var params = {
        title: this.get('title'),
        admin: this.get('admin')
      };
      this.sendAction('save', params);
    }
  }  
});
