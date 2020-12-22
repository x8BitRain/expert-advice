import Route from "@ember/routing/route";

export default class QuestionRoute extends Route {
  serialize() {
    return {
      slug: this.model.slug,
    };
  }

  model(params) {
    return this.store.findAll('question', { include: 'answers,user' }).then(questions => {
      return questions.filter((question) => question.slug === params.id)[0]
    })
  }
}
