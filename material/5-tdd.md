# TDD - Desenvolvimento Orientado a Testes

A história do Test-Driven Development (TDD) remonta aos princípios da metodologia ágil de desenvolvimento de software. Embora as práticas semelhantes ao TDD possam ser rastreadas até os anos 1950, o TDD como é conhecido hoje foi popularizado por Kent Beck em meados dos anos 1990.

O TDD é um processo de desenvolvimento de software que enfatiza escrever testes automatizados antes de escrever o código de produção. O ciclo básico do TDD é frequentemente resumido em três passos: "Red, Green, Refactor" (Vermelho, Verde, Refatorar):

- Escrevemos um teste para a funcionalidade que ainda será implementada. Como ela não existe, caso o teste seja executado ele deve resultar em erro, ou seja, vermelho!
- Escrevemos a funcionalidade, e executamos o teste, agora ele deve funcionar, isso é o verde.
- Se a funcionalidade e o teste funcionam, devemos buscar (se possível) melhorar o que foi codificado. As modificações podem fazer com que o teste falhe, a refatoração deve durar até o teste voltar a funcionar.

## Fundamentos do TDD

- **Testes Automatizados**: Os testes são escritos de forma automatizada, permitindo uma verificação rápida e contínua do comportamento do sistema.
- **Desenvolvimento Incremental**: O desenvolvimento é feito em pequenos passos iterativos, o que permite uma melhor compreensão dos requisitos e uma implementação mais precisa.
- **Feedback Imediato**: Como os testes são executados automaticamente, a desenvolvedora recebe feedback imediato sobre o impacto de suas alterações no sistema.

## Benefícios

- **Maior Confiança no Código**: O TDD ajuda a garantir que seu código funcione conforme o esperado. Ao escrever testes automatizados antes mesmo de começar a escrever o código de produção, você tem uma validação contínua de que o código está cumprindo os requisitos.
- **Identificação Precoce de Problemas**: Como você escreve testes antes do código de produção, quaisquer falhas ou problemas são identificados imediatamente. Isso permite corrigi-los antes que se tornem problemas maiores, economizando tempo e esforço no longo prazo.
- **Melhor Design do Código**: O TDD promove um design de código mais modular e coeso. Escrever testes antes do código incentiva a pensar na estrutura do software e na forma como os diferentes componentes interagem entre si, resultando em um código mais limpo e de fácil manutenção.
- **Facilita a Refatoração**: Como os testes garantem que o comportamento do sistema não seja alterado durante a refatoração, os desenvolvedores podem modificar e otimizar o código com confiança, sabendo que os testes irão detectar qualquer regressão.
- **Documentação Viva**: Os testes servem como uma forma de documentação viva do sistema, descrevendo explicitamente o comportamento esperado em diferentes cenários. Isso pode facilitar a compreensão do código por parte de outros desenvolvedores e ajudar a manter a consistência ao longo do tempo.
- **Redução de Erros**: Como o código é testado de forma automatizada e contínua, o TDD ajuda a reduzir a ocorrência de bugs e erros no software final. Isso resulta em uma experiência mais estável e confiável para os usuários.

## Primeiros passos: Prática

**Configure seu Ambiente de Desenvolvimento**:

- Certifique-se de ter o Node.js instalado em seu sistema.
- Instale o TypeScript globalmente, se ainda não estiver instalado:

  ```bash
  npm install -g typescript

  ```

**Inicie um Novo Projeto TypeScript**:

- Crie um novo diretório para o seu projeto e navegue até ele no terminal.
- Inicie um novo projeto TypeScript executando o seguinte comando:

```bash
tsc --init
```

**Instale as Dependências do Test Runner**:

- Para executar seus testes, você precisará de um test runner. Um dos mais populares é o Jest. Instale-o juntamente com o ts-jest para suporte ao TypeScript:

```
npm install --save-dev jest @types/jest ts-jest

```

**Escreva Seus Primeiros Testes**:

- Crie um arquivo para seus testes, por exemplo, `password-validator.test.ts`.
- Escreva um teste simples para uma função que você ainda não implementou:

```tsx
// password-validator.test.ts
import { hasMinCharacters } from "./password-validator";

describe("Password Min Character: min of 8 characters", () => {
  test("should return false when password has only one character", () => {
    expect(hasMinCharacters("t")).toBe(false);
  });

  test("should return true when password has only 8 characters", () => {
    expect(hasMinCharacters("teste123")).toBe(true);
  });
});
```

**Escreva a Implementação Mínima Necessária**:

- Crie um arquivo `password-validator.ts` para implementar a função `hasMinCharacters`.
- Implemente a função `hasMinCharacters`:

```tsx
// password-validator.ts
export const MIN_PASSWORD_CHARACTER = 8;

export function hasMinCharacters(password): boolean {
  return hasMinCharacters.length >= MIN_PASSWORD_CHARACTER;
}
```

**Configure o Jest para Testar Arquivos TypeScript**:

- Adicione a seguinte configuração ao seu `jest.config.js` para que o Jest possa lidar com arquivos TypeScript:

```js
// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
};
```

**Execute Seus Testes**:

- Execute seus testes usando o Jest:

  ```
  npx jest

  ```

**Observe os Resultados**:

- Se todos os testes passarem, você está pronto para continuar desenvolvendo.
- Se algum teste falhar, revise sua implementação e faça as correções necessárias.
