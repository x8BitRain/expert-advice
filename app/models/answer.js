import Model, { attr, belongsTo } from '@ember-data/model';

export default class AnswerModel extends Model {
  @attr description;
  @attr createdAt;
  @belongsTo user;
  @belongsTo question;
}
