export default function (server) {
  server.create('user', { email: 'test@test.com' });
  server.createList('user', 3);
}
