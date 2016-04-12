import Model from 'ember-data/model';

export default Model.extend({
  title: Model.attr(),
  content: Model.attr(),
  author: Model.attr(),
  site: Model.belongsTo('site', { async: true })
});
