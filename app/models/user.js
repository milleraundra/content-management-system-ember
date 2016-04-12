import Model from 'ember-data/model';

export default Model.extend({
  username: Model.attr(),
  password: Model.attr(),
  sites: Model.hasMany('site', { async: true })

});
