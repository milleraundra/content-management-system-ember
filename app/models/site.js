import Model from 'ember-data/model';

export default Model.extend({
  admin: DS.attr(),
  title: DS.attr(),
  posts: DS.hasMany('post', { async: true })
});
