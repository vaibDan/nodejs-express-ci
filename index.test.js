const request = require('supertest');
const { server, app } = require('./index');

describe('GET /', () => {
    afterAll((done) => {
        server.close(done);
    });

  it('should return Hello, World!', async () => {
      const res = await request(server).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Hello, World!');
  });
});