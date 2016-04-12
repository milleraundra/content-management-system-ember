import Model from 'ember-data/model';

export default Model.extend({
  name: DS.attr(),
  posts: DS.hasMany('post', {async:true})
});
