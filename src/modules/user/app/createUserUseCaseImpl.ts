import UserEntity from "../domain/entity/userEntity";
import UserDomainService from "../domain/service/userDomainService";
import Email from "../domain/valueObjects/email";
import Password from "../domain/valueObjects/password";
import UserAlreadyExistsError from "../domain/error/userAlreadyExistsError";
import CreateUserUseCase from "./createUserUseCase";
import CreateUserValidation from "./createUserValidation";

export default class CreateUserUseCaseImpl implements CreateUserUseCase {
  constructor(
    private readonly _userDomainService: UserDomainService,
    private readonly _createUserValidation: CreateUserValidation
  ) {}

  async execute(dto: unknown) {
    // preconditions
    const userDTO = await this._createUserValidation.validate(dto);

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

    // side effect
    if (!userDomain) {
      throw new UserAlreadyExistsError();
    }

    // side effect
    await this._userDomainService.create(user);

    // postcondition
    return true;
  }
}
