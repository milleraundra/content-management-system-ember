import DS from 'ember-data';

export default DS.Model.extend({
  admin: DS.belongsTo('user',  { async: true}),
  title: DS.attr(),
  posts: DS.hasMany('post', { async: true })
});
