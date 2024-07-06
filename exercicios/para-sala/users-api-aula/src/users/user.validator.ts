import { User } from './user.entity';

export class UserValidator {
  public static ERROR_EMAIL_INVALID = 'Invalid email';
  public static ERROR_PASSWORD_INVALID = 'Invalid password';
  public static ERROR_EMAIL_ALREADY_IN_USE = 'Email already in use';
  public static ERROR_CPF_ALREADY_IN_USE = 'CPF already in use';

  static verifyEmail(email: string): void {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error(this.ERROR_EMAIL_INVALID);
    }
  }

  static verifyPassword(password: string): boolean {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!regex.test(password)) {
      throw new Error(this.ERROR_PASSWORD_INVALID);
    }

    return true;
  }

  static checkEmailAlreadyInUse(users: User[], email: string): boolean {
    if (users.some((user) => user.email === email)) {
      throw new Error(this.ERROR_EMAIL_ALREADY_IN_USE);
    }

    return true;
  }

  static checkCpfAlreadyInUse(users: User[], cpf: string): boolean {
    if (users.some((user) => user.cpf === cpf)) {
      throw new Error(this.ERROR_CPF_ALREADY_IN_USE);
    }

    return true;
  }
}
