# Pirâmide de Testes

Uma pirâmide de testes é uma estratégia de organização de testes de software, onde os diferentes tipos de testes são representados em uma forma de pirâmide, com os testes mais básicos e de menor nível ocupando a base, e os testes mais complexos e de maior nível ocupando o topo.

<h1>
  <img src="../assets/piramide-de-testes.png" alt="Pirâmide de testes" width="554" heigh="510">
</h1>

A pirâmide de testes enfatiza a importância de ter uma base sólida de testes unitários, pois eles são:

- Mais fáceis de escrever
- Mais rápidos de executar
- Oferecem uma cobertura mais abrangente do código

Isso ajuda a reduzir o custo e o esforço necessários para garantir a qualidade do software.

## Testes de unidade

São os testes mais básicos e de menor nível, focados em testar unidades individuais de código, como funções ou métodos. Eles são rápidos de serem executados e fornecem feedback imediato sobre a integridade do código.

```ts
import { validCPF } from "../validators/UserValidator";

describe("User Validator", () => {
  it("Quando o CPF é 111.111.111-11 deve retornar que o CPF é inválido", () => {
    const cpf = "111.111.111-11";
    const esperado = false;
    const retornado = validCPF(cpf);
    expect(esperado).toBe(retornado);
  });
});
```

## Teste de integração

Esses testes verificam a interação entre diferentes módulos ou unidades de código. Eles garantem que as partes do sistema estejam funcionando corretamente juntas.

```ts
describe("Create User", () => {
  test("Deve criar um usuário com sucesso sem endereço", async () => {
    const name = "Lais";
    const email = "lais.frigerio@gmail.com";
    const password = "T3st@123!";
    const cpf = "169.594.590-52";

    const userService = new UserService();
    const esperado = await userService.createUser(name, email, password, cpf);
    expect(esperado).toEqual(
      expect.objectContaining({ name, email, cpf, password, id: "1" })
    );
  });
});
```

# Teste E2E

Testes E2E, também conhecido como teste de sistema, ponta a ponta, end-to-end, são testes que verificam se o sistema como um todo atende aos requisitos especificados. Eles geralmente se concentram nos fluxos de trabalho principais e nas funcionalidades-chave do sistema.

Esta estratégia visa testes vários componentes de sistemas, desde da interface do usuário, até a comunicação entre micro-serviços, por exemplo.

```ts
//Cypress
describe("Create User", () => {
  it("should create a new user", () => {
    cy.visit("/create-user");
    cy.get('input[name="name"]').type("John");
    cy.get('input[name="email"]').type("john.due@example.com");
    cy.get('input[name="password"]').type("Test@2024#!");
    cy.get('input[name="cpf"]').type("007.511.610-39");
    cy.get('button[type="submit"]').click();
    cy.contains("User created successfully");
  });
});
```
