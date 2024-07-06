import { Test, TestingModule } from '@nestjs/testing';
import * as supertest from 'supertest';
import { AppModule } from '../app.module';
import { INestApplication } from '@nestjs/common';
import { ViaCepService } from '../third-party/via-cep/via-cep.service';

jest.mock('../third-party/via-cep/via-cep.service');

describe('Create User', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test('Deve criar um usuário com sucesso sem endereço', async () => {
    const name = 'Lais';
    const email = 'lais.frigerio@gmail.com';
    const password = 'T3st@123!';
    const cpf = '169.594.590-52';

    return supertest(app.getHttpServer())
      .post('/users')
      .send({
        name,
        email,
        password,
        cpf,
      })
      .expect(201)
      .expect(({ body }) => {
        expect(body.name).toBe(name);
        expect(body.email).toBe(email);
        expect(body.password).toBe(password);
        expect(body.cpf).toBe(cpf);
      });
  });

  test('Deve criar um usuário com sucesso COM endereço', async () => {
    const name = 'Lais';
    const email = 'lais.frigerio@gmail.com';
    const password = 'T3st@123!';
    const cpf = '169.594.590-52';
    const zipCode = '83314-010';

    const address = {
      street: 'Rua das Flores',
      neighborhood: 'Centro',
      city: 'São Paulo',
      state: 'SP',
      zipCode,
    };

    (ViaCepService.getAddress as jest.Mock).mockResolvedValue(address);

    const mySpyOn = jest.spyOn(ViaCepService, 'getAddress');

    return supertest(app.getHttpServer())
      .post('/users')
      .send({
        name,
        email,
        password,
        cpf,
        zipCode,
      })
      .expect(201)
      .expect(({ body }) => {
        expect(body).toStrictEqual(
          expect.objectContaining({
            name,
            email,
            cpf,
            password,
            address,
          }),
        );
        expect(mySpyOn).toHaveBeenCalled();
        expect(mySpyOn).toHaveBeenCalledTimes(1);
      });
  });
});
