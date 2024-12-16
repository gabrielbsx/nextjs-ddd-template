import AxiosRepository from "@/shared/infra/axios/axiosRepository";
import UserEntity from "@/modules/user/domain/entity/userEntity";
import UserRepository from "@/modules/user/domain/repository/userRepository";
import Email from "@/modules/user/domain/valueObjects/email";
import api from "@/shared/infra/axios/axiosConfig";

export default class UserAxiosRepository
  extends AxiosRepository<UserEntity>
  implements UserRepository
{
  constructor() {
    super("users");
  }

  async findByUsername(username: string): Promise<UserEntity | null> {
    const response = await api.get<UserEntity>(
      `/${this.resource}?username=${username}`
    );

    return response.data;
  }

  async findByEmail(email: Email): Promise<UserEntity | null> {
    const response = await api.get<UserEntity>(
      `/${this.resource}?email=${email.value}`
    );

    return response.data;
  }
}
