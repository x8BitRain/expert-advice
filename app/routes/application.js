import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";
import { action } from '@ember/object';

export default class ApplicationRoute extends Route {
  @service session;

  @action
  logout() {
    this.session.invalidate();
  }
}
