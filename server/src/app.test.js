const supertest = require('supertest');

const app = require('./app');

describe('App', () => {
  it('should respond with a message', async () => {
    const response = await supertest(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect('Content-Length', '48')
      .expect(200);
    console.log(response);
    expect(response.body.message).toEqual('🌭 🍾 H-Invetory API 🥊 🌊');
  });
});
