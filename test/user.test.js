const app = require('./app');
const sp = require('supertest');
const req = sp(app);

const mainUser = {
  name: 'FHJSABDFHJASDFAS',
  email: 'Teste@gmail.com',
  password: 'teste123',
  avatar: '', // não sei fazer envio de imagens pelo jest...
  data_nascimento: new Date(2003, 04, 24)
}

// Não sei enviar imagens pelo jest...
describe('Cadastro de usuário', () => {
  test('Deve cadastrar um usuário com sucesso retornando o status 200', async () => {
    const res = req.post('/user').send(user);
  });
});