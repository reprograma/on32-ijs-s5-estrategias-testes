export class Address {
  id?: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
  coumtry: string;
}

export class User {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public cpf: string,
    public id?: string,
    public address?: Address,
  ) {}
}
