import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  title() {
    return faker.lorem.sentence().replace('.', '?');
  },

  slug() {
    return faker.helpers.slugify(faker.lorem.sentence());
  },

  description() {
    return faker.lorem.paragraph();
  },

  tags() {
    const tags = [];
    const items = [
      'Science',
      'Technology',
      'Business',
      'Life',
      'Travel',
      'Reading',
      'Entertainment',
      'Politics'
    ];
    for (let i = 0; i < 3; i++) tags.push(items[(items.length * Math.random()) | 0]);
    return tags;
  },

  createdAt() {
    return faker.date.past();
  },

  afterCreate(question, server) {
    const AMOUNT = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
    server.createList('answer', AMOUNT, { question });
  }
});
