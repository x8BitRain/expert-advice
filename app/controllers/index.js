import Controller from '@ember/controller';
import { inject as service } from "@ember/service";
import { tracked } from '@glimmer/tracking';
import { alias, oneWay } from '@ember/object/computed';
import { action } from '@ember/object';
import pagedArray from 'ember-cli-pagination/computed/paged-array';
import tags from "../utils/tagList"


export default class IndexController extends Controller {
  @service session;
  @tracked page = 1;
  @tracked perPage = 10;
  currentTag = "";
  tags = tags;
  queryParams = ["page", "perPage", "currentTag"];

  @action
  changeCurrentTag(tagName) {
    let model = this.model;
    if (tagName !== 'clear') {
      let filteredModel = model.filter(link => link.tags.includes(tagName))
      this.set('model', filteredModel);
    } else {
      window.location.reload()
    }
  }

  @pagedArray(
    'model',
    {
      page: alias('parent.page'),
      perPage: alias('parent.perPage'),
      currentTag: alias('parent.currentTag')
    }
  ) pagedContent;

  @oneWay('pagedContent.totalPages') totalPages;

}
