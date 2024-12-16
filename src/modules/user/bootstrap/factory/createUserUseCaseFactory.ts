import CreateUserUseCase from "@/modules/user/app/createUserUseCaseImpl";
import UserDomainService from "@/modules/user/domain/service/userDomainService";
import UserInMemoryRepository from "@/modules/user/infra/inMemory/userInMemoryRepository";
import CreateUserZodValidation from "@/modules/user/infra/validation/zod/CreateUserZodValidation";

export default class CreateUserUseCaseFactory {
  static create(): CreateUserUseCase {
    const userInMemoryRepository = new UserInMemoryRepository();
    const createUserValidation = new CreateUserZodValidation();
    const userDomainService = new UserDomainService(userInMemoryRepository);
    const createUserUseCase = new CreateUserUseCase(
      userDomainService,
      createUserValidation
    );

    return createUserUseCase;
  }
}
