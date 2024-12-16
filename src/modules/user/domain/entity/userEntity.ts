import { Entity } from "@/shared/domain/entity/entity";
import Email from "../valueObjects/email";
import Password from "../valueObjects/password";

type UserProps = Entity & {
  name: string;
  email: Email;
  username: string;
  password: Password;
};

export default class UserEntity {
  private _props: UserProps;

  constructor(user: UserProps) {
    this._props = user;
  }

  get id() {
    return this._props.id;
  }

  get name() {
    return this._props.name;
  }

  get email() {
    return this._props.email;
  }

  get username() {
    return this._props.username;
  }
}
