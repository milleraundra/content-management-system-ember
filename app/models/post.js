import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  author: DS.attr(),
  site: DS.belongsTo('site', { async: true }),
  comments: DS.hasMany('comment', { async: true }),
  date: DS.attr(),
  image: DS.attr()
});
