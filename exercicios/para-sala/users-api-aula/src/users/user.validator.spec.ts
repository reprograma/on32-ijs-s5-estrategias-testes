import { UserValidator } from './user.validator';

describe('Valida email', () => {
  test('Deve retornar error se o e-mail é inválido', () => {
    const email = 'lais.frigeriogmail.com';
    expect(() => UserValidator.verifyEmail(email)).toThrow('Invalid email');
  });
});

describe('Valida senha', () => {
  test('Deve retornar erro quando a senha não possui no minimo 8 caracteres', () => {
    const password = 'Ab1@';
    expect(() => UserValidator.verifyPassword(password)).toThrow(
      'Invalid password',
    );
  });

  test('Deve retornar erro quando a senha não possui números', () => {
    const password = 'Teste@!@';
    expect(() => UserValidator.verifyPassword(password)).toThrow(
      'Invalid password',
    );
  });

  test('Deve retornar erro quando a senha não possui letras maisculas', () => {
    const password = 'teste@!1';
    expect(() => UserValidator.verifyPassword(password)).toThrow(
      'Invalid password',
    );
  });

  test('Deve retornar erro quando a senha não possui letras minusculas', () => {
    const password = 'TESTE@!1';
    expect(() => UserValidator.verifyPassword(password)).toThrow(
      'Invalid password',
    );
  });

  test('Deve retornar erro quando a senha não possui caracters especiais', () => {
    const password = 'TESTEet1';
    expect(() => UserValidator.verifyPassword(password)).toThrow(
      'Invalid password',
    );
  });

  test('Deve retornar true quando a senha é válida', () => {
    const password = 'TESTe@!1';
    expect(UserValidator.verifyPassword(password)).toBe(true);
  });
});

describe('Valida se o email já está em uso', () => {
  test('Deve retornar um erro quando já existe um usuário com o email informado', () => {
    const email = 'lais.frigerio@gmail.com';
    const users = [
      { email, name: 'Lais', password: 'T3st@123!', cpf: '396.169.290-46' },
    ];

    expect(() => UserValidator.checkEmailAlreadyInUse(users, email)).toThrow(
      'Email already in use',
    );
  });

  test('Deve retornar true quando o email não está em uso (lista de usuarios vazia)', () => {
    const email = 'lais.frigerio@gmail.com';
    const users = [];
    expect(UserValidator.checkEmailAlreadyInUse(users, email)).toBe(true);
  });

  test('Deve retornar true quando o email não está em uso (lista não está vazia)', () => {
    const email = 'lais.frigerio@gmail.com';
    const users = [
      {
        email: 'laisfrigerio.dev@gmail.com',
        name: 'Lais',
        password: 'T3st@123!',
        cpf: '396.169.290-46',
      },
      {
        email: 'pedro.dev@gmail.com',
        name: 'Pedro',
        password: 'T3st@123!',
        cpf: '308.540.090-78',
      },
    ];
    expect(UserValidator.checkEmailAlreadyInUse(users, email)).toBe(true);
  });
});
