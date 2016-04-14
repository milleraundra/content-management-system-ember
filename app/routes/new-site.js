import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('site');
  },
  actions: {
    save(params) {
      var that = this;
      var admin = this.get('session').get('uid');
      this.store.findRecord('user', admin).then(function(record) {
        var newSite = that.store.createRecord('site', {
          title: params.title,
          category: params.category,
          admin: record
        });
        record.get('sites').addObject(newSite);
        newSite.save().then(function(){
          record.save();
        });
      });
      this.transitionTo('admin');
    }
  }
});
