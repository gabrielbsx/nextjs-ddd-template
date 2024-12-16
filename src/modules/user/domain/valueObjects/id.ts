import { randomUUID } from "crypto";

export default class Id {
  private id: string;

  constructor(id: string) {
    this.id = id;
  }

  get value() {
    return this.id;
  }

  public static isValid(id: string) {
    return id.length === 36;
  }

  public static generate() {
    return new Id(randomUUID());
  }
}
