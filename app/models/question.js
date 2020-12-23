import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class QuestionModel extends Model {
  @attr title;
  @attr description;
  @attr tags;
  @attr slug;
  @attr createdAt;
  @belongsTo user;
  @hasMany answers;
}
