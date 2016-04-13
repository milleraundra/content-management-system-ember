import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  sites: DS.hasMany('site', { async: true })
});
