import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { UserValidator } from './user.validator';

@Injectable()
export class UserService {
  private users: User[] = [];

  createUser(name: string, email: string, password: string, cpf: string): User {
    UserValidator.verifyEmail(email);
    UserValidator.verifyPassword(password);
    UserValidator.checkEmailAlreadyInUse(this.users, email);
    UserValidator.checkCpfAlreadyInUse(this.users, cpf);
    UserValidator.verifyCpf(cpf);

    const user = new User(
      name,
      email,
      password,
      cpf,
      `${this.users.length + 1}`,
    );
    this.users.push(user);
    return user;
  }

  updateUser(
    id: string,
    name: string,
    email: string,
    password: string,
    cpf: string,
  ): User {
    UserValidator.verifyEmail(email);
    UserValidator.verifyPassword(password);
    UserValidator.checkEmailAlreadyInUse(this.users, email);
    UserValidator.checkCpfAlreadyInUse(this.users, cpf);
    UserValidator.verifyCpf(cpf);

    const user = this.users.find((user) => user.id === id);

    if (user) {
      user.name = name;
      user.email = email;
      user.password = password;
      user.cpf = cpf;
    }

    return user;
  }

  deleteUser(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }

  getUserById(id: string): User {
    return this.users.find((user) => user.id === id);
  }

  listUsers(): User[] {
    return this.users;
  }
}
