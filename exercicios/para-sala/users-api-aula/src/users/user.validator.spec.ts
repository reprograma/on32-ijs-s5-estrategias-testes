import { UserValidator } from './user.validator';

describe('Senha á email', () => {
  test('Deve retornar error se o e-mail é inválido', () => {
    const email = 'lais.frigeriogmail.com';
    expect(() => UserValidator.verifyEmail(email)).toThrow('Invalid email');
  });
});
