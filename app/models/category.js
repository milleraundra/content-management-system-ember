import Model from 'ember-data/model';

export default Model.extend({
  name: Model.attr(),
  posts: Model.hasMany('post', {async:true})
});
