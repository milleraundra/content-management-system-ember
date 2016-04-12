import Model from 'ember-data/model';

export default Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  author: DS.attr(),
  site: DS.belongsTo('site', { async: true })
});
