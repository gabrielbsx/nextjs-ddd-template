import CreateUserAppService from "../app/createUserAppService";
import UserDomainService from "../domain/service/userDomainService";
import UserInMemoryRepository from "../infra/inMemory/userInMemoryRepository";

export default class CreateUserAppServiceFactory {
  static create(): CreateUserAppService {
    const userInMemoryRepository = new UserInMemoryRepository();
    const userDomainService = new UserDomainService(userInMemoryRepository);
    const createUserAppService = new CreateUserAppService(userDomainService);

    return createUserAppService;
  }
}
