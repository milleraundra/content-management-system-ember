import DS from 'ember-data';

export default DS.Model.extend({
  admin: DS.attr(),
  title: DS.attr(),
  posts: DS.hasMany('post', { async: true })
});
