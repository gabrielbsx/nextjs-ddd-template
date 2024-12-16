import AppService from "@/shared/domain/protocol/appService";
import UserEntity from "../domain/entity/userEntity";
import UserDomainService from "../domain/service/userDomainService";
import Email from "../domain/valueObjects/email";
import Password from "../domain/valueObjects/password";
import CreateUserInput from "./dto/createUserInput";
import UserAlreadyExistsError from "../domain/error/userAlreadyExistsError";

export default class CreateUserAppService
  implements AppService<CreateUserInput, boolean>
{
  constructor(private readonly _userDomainService: UserDomainService) {}

  async execute(userDTO: CreateUserInput) {
    const { name, username } = userDTO;
    const email = new Email(userDTO.email);
    const password = new Password(userDTO.password);

    const user = new UserEntity({
      name,
      username,
      email,
      password,
    });

    const userDomain = await this._userDomainService.isUnique(user);

    if (!userDomain) {
      throw new UserAlreadyExistsError();
    }

    await this._userDomainService.create(user);

    return true;
  }
}
