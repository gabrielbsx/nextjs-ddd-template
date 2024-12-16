export default class Email {
  private email: string;

  constructor(email: string) {
    this.email = email;
  }

  get value() {
    return this.email;
  }

  public static isValid(email: string) {
    const emailRegex = /\S+@\S+\.\S+/;

    return emailRegex.test(email);
  }

  public equals(email: Email) {
    return this.email === email.value;
  }
}
