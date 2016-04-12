import Model from 'ember-data/model';

export default Model.extend({
  admin: DS.belongsTo('admin')
});
