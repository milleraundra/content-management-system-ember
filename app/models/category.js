import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  posts: DS.hasMany('post', {async:true})
});
