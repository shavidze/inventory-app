const supertest = require('supertest');

const app = require('../../app');

describe('GET /api/v1/states', () => {
  it('should respond with an array of states', async () => {
    const response = await supertest(app)
      .get('/api/v1/states')
      .expect(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});
