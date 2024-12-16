import InMemoryRepository from "@/shared/infra/inMemory/inMemoryRepository";
import UserRepository from "../../domain/repository/userRepository";
import UserEntity from "../../domain/entity/userEntity";
import Email from "../../domain/valueObjects/email";

export default class UserInMemoryRepository
  extends InMemoryRepository<UserEntity>
  implements UserRepository
{
  constructor() {
    super("User");
  }

  async findByUsername(username: string): Promise<UserEntity | null> {
    const user = (await this.getAll()).find(
      (currentUser) => currentUser.username === username
    );

    return user || null;
  }

  async findByEmail(email: Email): Promise<UserEntity | null> {
    const user = (await this.getAll()).find((currentUser) =>
      currentUser.email.equals(email)
    );

    return user || null;
  }
}
