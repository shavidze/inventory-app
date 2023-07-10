const supertest = require('supertest');

const app = require('./app');

describe('Get /api/v1', () => {
  it('should respond with a message', async () => {
    const response = await supertest(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '48')
      .expect(200);
    expect(response.body.message).toEqual('🌭 🍾 H-Invetory API 🥊 🌊');
  });
});
