import UserEntity from "../entity/userEntity";
import UserRepository from "../repository/userRepository";

export default class UserDomainService {
  constructor(private readonly _userRepository: UserRepository) {}

  async isUnique(user: UserEntity) {
    const userFound = await this._userRepository.findByEmail(user.email);

    return !userFound;
  }

  async create(user: UserEntity) {
    return await this._userRepository.save(user);
  }
}
