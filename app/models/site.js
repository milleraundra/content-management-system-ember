import Model from 'ember-data/model';

export default Model.extend({
  admin: Model.attr(),
  title: Model.attr(),
  posts: Model.hasMany('post', { async: true })
});
