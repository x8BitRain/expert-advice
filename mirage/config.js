import ENV from "ember-test-assignment/config/environment";
import {Response} from 'miragejs';

export default function() {
  this.logging = true;
  this.timing = 0;

  this.urlPrefix = ENV.serverURL;

  this.post("/oauth/token", function() {
    const { username, password } = this.normalizedRequestAttrs();

    if (username === "test@test.com" && password === "test") {
      return new Response(200, {}, {
        access_token: "1b1234074a7a5e4868c96ce2e32b8a4a6aa3a7e929ef2f33e38b08f8f057961e",
        created_at: 1597285088,
        expires_in: 7200,
        refresh_token: "c0ff9573874e236d7e74c1adb3e2668329f2b84aba1aa5a67528799fc2634761",
        token_type: "Bearer"
      });
    }

    return new Response(401);
  });

  this.namespace = "/api/v1";

  this.get("/questions", function(schema) {
    const allQuestions = schema.questions.all();
    return allQuestions.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
  });

  this.get("/questions/:slug");

  this.post('/questions', function({questions}) {
    let attrs = this.normalizedRequestAttrs();
    if (attrs.description && attrs.title) {
      return questions.create(attrs);
    } else {
      return new Response(422, {}, {
        "errors": [
          {
            "source": { "pointer": "/data/attributes/firstname"},
            "detail": "Please enter a title and description"
          }
        ]});
    }
  });

  this.del('/questions/:id');

  this.patch('/questions/:slug');

  this.post('/answers');

  this.get('/answers');

  this.get('/answers/:id');

  this.del('/answers/:id');

  this.get("/users/me",  function(schema, request) {
    if (request.requestHeaders.Authorization) {
      return schema.users.first();
    }
    return new Response(401);
  });
}
