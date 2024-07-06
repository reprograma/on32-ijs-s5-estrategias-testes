<h1 align="center">
  <img src="../../../assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Tema da Aula

Turma Online ON32 - Imersão JavaScript | Semana 5 | 2024 | Professora Lais Frigério

### Professora Lais

<h1>
  <img src="../../../assets/lais.png" alt="foto lais" width="200">
</h1>

Eu sou engenheira de software, professora de programação e compartilho conteúdo técnico em minhas redes sociais!

Fui aluna da segunda turma do curso Eudca{devas} em 2023!
Hoje trabalho como Engenheira de Software no Nubank.

- 💌 Email: laisfrigerio.dev@gmail.com
- 📸 Instagram: [@laisfrigerio](https://www.instagram.com/laisfrigerio/)
- 💼 LinkedIn: [in/laisfrigerio](https://www.linkedin.com/in/laisfrigerio/)
- 👩‍💻 Github:[/laisfrigerio](https://github.com/laisfrigerio)

### Instruções

Antes de começar, vamos organizar nosso setup.

- Fork esse repositório
- Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
- Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)

### Sistema

Este projeto consiste em uma API de cadastro de usuários, que podem ser. Todos os usuários tem em comum:

- Nome
- Email
- Senha
- CPF

Ao informar o campo `zipCode`, o sistema busca os dados do CEP na base dos correios via integração com serviço externo.

Atualmente, essa API contém as seguintes APIs:

- `GET` http://localhost:3000/users
- `GET` http://localhost:3000/users/:id
- `POST` http://localhost:3000/users
- `PUT` http://localhost:3000/users/:id
- `DELETE` http://localhost:3000/users/:id

Existem algumas regras de validação para cadastro/edição de usuários, dentro as quais:

- Validação de CPF
- Validação de E-mail
- Validação de senha
  - Minimo de 8 digitos
  - Minimo de 1 letra maiúscula
  - Minimo de 1 caracter especial
  - Minimo de 1 número
- O e-mail deve ser único
- CPF deve ser único

Todos essas regras estão dentro do arquivo `user.service.ts`

### Objetivo da atividade

- Vamos refatorar o código e criar uma classe exclusiva para validações
- Vamos criar testes de unidade para as funções de validação
- Vamos criar testes de unidade para o cadastro, atualização, deleção e lista de usuários
- Vamos realizar testes de unidade/integração com um serviço de terceiro `ViaCEP` usando `mocks` e `spies`.
- Vamos criar testes de integração para as APIs

### Tecnologias

- Node `v18.12.1`

### Executar o projeto

- Instalação das dependências:

```sh
npm install
```

- Execução

```sh
npm run start:dev
```

### Acessando rota via CURL

- GET lista de usuários:

```sh
curl -X GET 'http://localhost:3000/users'
```

- POST para criar um usuário novo (sucesso):

```sh
curl -X POST 'http://localhost:3000/users' -H 'Content-Type: application/json' --data '{
  "name": "Maria Joana",
  "email": "maria.joan@gmail.com",
  "password": "Test@1234",
  "cpf": "099.733.969-10"}'
```

**Obs:** ao realizar um novo cadastro com esse e-mail e/ou CPF deve retornar uma exceção.

- POST para criar usuário com CPF inválido:

```sh
curl -X POST 'http://localhost:3000/users' -H 'Content-Type: application/json' --data '{
  "name": "Maria Joana",
  "email": "maria.joan@gmail.com",
  "password": "Test@1234",
  "cpf": "099.733.969-11"
}'
```

- POST para criar usuário com e-mail inválido:

```sh
curl -X POST 'http://localhost:3000/users' -H 'Content-Type: application/json' --data '{
  "name": "Maria Joana",
  "email": "maria.joan-gmail.com",
  "password": "Test@1234",
  "cpf": "051.063.760-41"
}'
```

- POST para criar usuário com senha inválido:

```sh
curl -X POST 'http://localhost:3000/users' -H 'Content-Type: application/json' --data '{
  "name": "Maria Joana",
  "email": "maria.joan-gmail.com",
  "password": "Test1234",
  "cpf": "770.211.120-84"
}'
```

<p align="center">
Desenvolvido com :purple_heart: por laisfrigerio
</p>
