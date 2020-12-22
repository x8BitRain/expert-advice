import { Factory } from 'ember-cli-mirage';
import faker from "faker"

export default Factory.extend({

  email() {
    return faker.internet.email();
  },

  password() {
    return 'test';
  },

  afterCreate(user, server) {
    server.createList('question', 6, { user });
  }

});
