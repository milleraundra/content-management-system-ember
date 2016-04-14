import Model from 'ember-data/model';

export default Model.extend({
  name: DS.attr(),
  email: DS.attr(),
  comment: DS.attr(),
  post: DS.belongsTo('post', { async: true })
});
