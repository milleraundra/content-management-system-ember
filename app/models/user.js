import Model from 'ember-data/model';

export default Model.extend({
  username: DS.attr(),
  sites: DS.hasMany('site', { async: true })
});
