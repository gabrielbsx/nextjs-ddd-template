export default class Password {
  private value: string;

  constructor(value: string) {
    this.value = value;
  }

  getValue() {
    return this.value;
  }

  public static isStrong(password: string) {
    return password.length > 6;
  }
}
