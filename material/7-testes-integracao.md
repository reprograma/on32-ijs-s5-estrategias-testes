# Testes de integração

Teste de integração tem objetivo de validar módulos/componentes quando integrados para verificar se eles funcionam conforme o esperado, ou seja, testar os módulos que estão funcionando bem individualmente não apresenta problemas quando integrados. A principal função ou objetivo deste teste é testar as interfaces entre as unidades/módulos. Em geral, o teste de integração complementa o teste unitário, por olhar para uma porção mais ampla do sistema e suas comunicações externas.

## Benefícios

- Garante a adequação dos módulos e dos resultados de suas operações;
- Detecta problemas de comunicação entre módulos;
- Fornece uma cobertura de teste mais ampla em comparação com testes unitários.

## Quando Utilizar Testes de Integração

A decisão de quando utilizar testes de integração é crucial para garantir a eficácia do processo de teste. Compreender os cenários em que os testes de integração são necessários é fundamental para o desenvolvimento de software de qualidade:

- Escreva testes de integração quando duas ou mais unidades de código precisam interagir entre si para implementar uma funcionalidade
- Os testes de integração são particularmente úteis em situações em que é necessário validar a interação entre diferentes componentes do sistema
- Os testes de integração também são importantes para garantir a integridade e a confiabilidade do sistema como um todo

Ao realizar um teste de integração, é possível validar se duas unidades do sistema estão se comunicando corretamente. Esse tipo de teste é essencial para garantir o funcionamento adequado das diferentes partes do sistema:

- Integração entre camadas de uma arquitetura, como a lógica de negócios e o acesso aos dados
- Integração com serviços web externos
- Integração com filas de mensagens ou outros serviços

## Truques Essenciais para Testes

Existem técnicas poderosas que podem tornar os testes mais completos e robustos. Entre elas, destacam-se os **mocks**, os **stubs** e os **spies**.

Para entender esses conceitos, primeiro é importante saber o que são os chamados **dublês de teste**. Gerard Meszaros, o autor do livro **XUnit Test Patterns: Refactoring Test Code** usa o termo **dublê de teste** para qualquer tipo de objeto falso usado no lugar de um objeto real para fins de teste.

Podemos dizer que um dublê nos ajuda testar nosso código eliminando dependências, como por exemplo evitar de fazer uma conexão com banco de dados para testar uma funcionalidade. No livro também ele define os dublês em alguns tipos, nesse artigo vamos focar em **mocks e stubs**.

**Mocks**, **stubs** e **spies** são técnicas essenciais para isolar o comportamento de funções e dependências em testes de integração. Cada um desempenha um papel específico no processo de teste, proporcionando maior controle e precisão na verificação do código:

- **Mocks** são objetos simulados que imitam o comportamento de dependências reais, permitindo a definição de respostas específicas para testes. As vantagens dos mocks são velocidade, isolamento e controle.
- **Stubs** são implementações simuladas de dependências que fornecem respostas pré-definidas, permitindo a simulação de diferentes cenários de teste.
- **Spies** são utilizados para observar o comportamento das funções e gravam informações sobre como foram chamados, permitindo a verificação de parâmetros recebidos, ordem de execução e quantas vezes foram chamadas.

## Exemplo

**Configuração do Ambiente**:

- Clone o repositório
- Instale as dependências `npm install`

Rotas do serviço:

- **GET** `/api/users` - lista usuários
- POST `/api/users` - cadastra usuário
- PUT `/api/users/:id` - edita usuário
- DELETE `/api/users/:id` - remove usuário
- **GET** `/api/users/:id` - detalhes de um usuário

Dados do usuário:

- `nome` - String
- `username` - String e única
- `email` - String e único
- `password` - String, min de 8 caracteres, deve conter pelo menos 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caracter especial

Vamos começar definindo os cenários de teste para cadastro de usuários.

### Com sucesso

Para cadastrar um usuário com sucesso basta preencher todos os dados válidos:

- nome: John
- username: john.doe
- email: john.doe@example.com
- password: T3st@202

### Com erro

Já com erro temos alguns cenários possíveis, como:

- Deixar um dos campos vazio (nome, username, email ou senha) já que todos são obrigatórios
- Preencher um username que já está cadastrado
- Preencher um e-mail que já está cadastrado
- Preencher um e-mail inválido
- Preencher uma senha com menos de 8 caracteres
- Preencher uma senha que não tenha digítos numéricos
- Preencher uma senha que não tenha letras maiúsculas
- Preencher uma senha que não tenha letras minúsculas
- Preencher uma senha que não tenha caracteres especiais

## Implementação

```ts
import { UserService } from "./user.service";
import { ViaCepService } from "../third-party/via-cep/via-cep.service";

jest.mock("../third-party/via-cep/via-cep.service");

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

  test("Deve criar um usuário com sucesso com endereço", async () => {
    const name = "Lais";
    const email = "lais.frigerio@gmail.com";
    const password = "T3st@123!";
    const cpf = "169.594.590-52";
    const zipCode = "83314-010";

    const address = {
      zipCode,
      complement: "",
      street: "Rua das Flores",
      neighborhood: "Centro",
      city: "Curitiba",
      state: "PR",
    };

    const esperado = {
      id: "1",
      name,
      email,
      password,
      cpf,
      address,
    };

    (ViaCepService.getAddress as jest.Mock).mockResolvedValue(address);

    const userService = new UserService();
    const retornado = await userService.createUser(
      name,
      email,
      password,
      cpf,
      zipCode
    );

    expect(retornado).toEqual(expect.objectContaining(esperado));
  });

  test("Deve retornar erro ao criar um usuário com senha inválida", async () => {
    const name = "Lais";
    const email = "lais.frigerio@gmail.com";
    const password = "t3st@123!";
    const cpf = "457.153.530-92";

    const userService = new UserService();

    await expect(
      userService.createUser(name, email, password, cpf)
    ).rejects.toThrow("Invalid password");
  });
});
```

# Conclusão

Investir em testes de integração é essencial para garantir a confiabilidade do software. Ao combinar testes unitários e de integração, é possível validar o sistema e garantir que diferentes partes do sistema se comuniquem corretamente. Ao implementar as estratégias e boas práticas apresentadas neste artigo, seu código se tornará muito mais testável e confiável.
