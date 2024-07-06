export class UserValidator {
  public static ERROR_EMAIL_INVALID = 'Invalid email';

  static verifyEmail(email: string): void {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error(this.ERROR_EMAIL_INVALID);
    }
  }
}
