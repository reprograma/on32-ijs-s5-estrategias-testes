# Teste E2E

O teste de ponta a ponta é o processo de testar um software do início ao fim, a ideia é rodar a aplicação com todas as suas dependências: banco de dados, serviços externos, métricas, logging, etc. Isso ainda pode ser em um ambiente de teste, separado do ambiente de produção. Mas, idealmente, esse ambiente de teste representa o ambiente de produção o mais próximo possível.

Mesmo que seu sistema esteja coberto por testes unitário e de integração podem haver requisitos não atendidos. Por exemplo, se seu software tem uma interface de usuário, os testes unitários e de integração não conseguem validar se a experiência do usuário é boa, se todos os elementos necessários existem. Para isso é necessário utilizar testes E2E. Outro cenário em que testes E2E podem ser aplicado é em quando existem serviços (ou microsserviços) espalhados em diversos servidores, é importante garantir que tudo funcione como esperado.

## Vantagens

- Testes da perspectiva de um usuário: testes de ponta a ponta examinam o aplicativo da perspectiva de um usuário final. Isso pode descobrir defeitos que não são aparentes no teste de unidade;
- Expande a cobertura de teste: os testes E2E podem verificar se todas as dependências de um aplicativo funcionam corretamente em conjunto, incluindo código de terceiros;
- Reduz o número de erros encontrados na produção: adicionar testes E2E a um conjunto de testes pode ajudar a reduzir a chance de encontrar defeitos após a implantação na produção.

## Desvantagens

- Execução lenta: testes que verificam fluxos de trabalho por meio da interface do usuário podem levar muito tempo para serem executados;
- Testes frágeis: os testes E2E podem exigir manutenção e resolução de problemas significativos;
- Falta de ambiente de teste disponível: recriar um ambiente de teste para um cenário do mundo real pode ser difícil;
- Mais difícil de depurar: quando um teste E2E falha, mais pesquisas podem ser necessárias para encontrar e corrigir o problema do que com uma unidade mais granular ou teste de integração.

## Implementação

```ts
import { Test, TestingModule } from "@nestjs/testing";
import * as supertest from "supertest";
import { AppModule } from "../app.module";
import { INestApplication } from "@nestjs/common";
import { ViaCepService } from "../third-party/via-cep/via-cep.service";

describe("When creating a new user", () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("Deve criar um usuário com sucesso sem endereço", async () => {
    const name = "Lais";
    const email = "lais.frigerio@gmail.com";
    const password = "T3st@123!";
    const cpf = "169.594.590-52";

    return supertest(app.getHttpServer())
      .post("/users")
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
});
```
