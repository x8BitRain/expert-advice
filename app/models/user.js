import Model, { attr, hasMany } from '@ember-data/model';

export default class User extends Model {
  @attr("string") email;
  @attr("string") password;
  @hasMany() questions;
  @hasMany() answers;
}
