const app = require('./app');
const sp = require('supertest');
const req = sp(app);

describe('Servidor', () => {
  test('aplicação deve estar rodando corretamente.', async () => {
    const response = await req.get('/');
    expect(response.status).toEqual(200);
  });
});