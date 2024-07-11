# Testes de unidade

Um teste unitário para TDD (Test-Driven Development) é um teste automatizado que verifica o comportamento de uma unidade de código isolada, como uma função ou método, em um ambiente controlado. No contexto do TDD, os testes unitários são escritos antes mesmo de escrever o código de produção.

A ideia fundamental por trás de um teste unitário em TDD é especificar o comportamento esperado da unidade de código antes de implementá-la. Isso é feito escrevendo um teste que irá falhar inicialmente, pois a unidade de código ainda não está implementada. Em seguida, o código de produção é escrito para satisfazer o teste, e o teste deve passar. Se necessário, o código é refatorado para melhorar sua qualidade, mantendo todos os testes passando.

Um teste unitário em TDD geralmente segue o padrão "Red-Green-Refactor" (Vermelho-Verde-Refatorar).

## Exemplo

Vamos continuar evoluindo nosso validador de senha, agora com a função que verifica se tem digitos númericos. Vamos começar escrevendo um teste que falha:

```tsx
// password-validator.test.ts
import { hasMinCharacters, hasNumbers } from "./password-validator";

describe("Password has Numbers: should have at least one digit", () => {
  test("should return false when password does not have at least one digit", () => {
    expect(hasNumbers("t")).toBe(false);
  });
});
```

Depois a gente escreve o mínimo de código para o teste passar. Um exemplo simples seria:

```tsx
// password-validator.ts
export function hasNumbers(password): boolean {
  return false;
}
```

Esse código já seria o suficiente para o nosso teste passar. Mas veja, se eu adicionar um novo caso de teste passando uma senha que tenha dígitos numéricos, nosso teste irá falha:

```tsx
// password-validator.test.ts
import { hasMinCharacters, hasNumbers } from "./password-validator";

describe("Password has Numbers: should have at least one digit", () => {
  test("should return false when password does not have at least one digit", () => {
    expect(hasNumbers("t")).toBe(false);
  });

  test("should return true when password does have at least one digit", () => {
    expect(hasNumbers("t3ste")).toBe(true);
  }); // red
});
```

Portanto, vamos refatorar nosso código para incluir a lógica que válida se de fato a senha possui pelo menos 1 caracter numérico:

```tsx
// password-validator.ts
export function hasNumbers(password): boolean {
  const regex = /\d/;
  return regex.test(password);
}
```

## F.I.R.S.T

Um bom teste unitário deve seguir o F.I.R.S.T.:

- Rápido (Fast): Projetos grandes costumam ter muitos testes, tempo é dinheiro.
- Isolado (Isolated): Um teste unitário deve ser executado isoladamente, sem comunicações com sistemas externos ou bancos de dados.
- "Repetível" (Repeatable): Sua execução deve ter resultados consistentes caso não haja nenhuma alteração.
- "Auto-verificável" (Self-validating): O teste deve ser capaz de detectar de maneira automática se passou ou falhou.
- Minucioso (Thorough): Cobrir caminho felizes, infelizes, casos raros (edge cases)

E ainda:

- Simples: Teste devem ser fáceis de implementar e ler, sem repetição do código da função testada.
- Oportuno: A escrita de um teste não deve demorar mais que a escrita do código testado.
