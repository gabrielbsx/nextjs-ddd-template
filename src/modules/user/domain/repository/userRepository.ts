import Repository from "@/shared/repository/repository";
import UserEntity from "../entity/userEntity";
import Email from "../valueObjects/email";

export default interface UserRepository extends Repository<UserEntity> {
  findByUsername(username: string): Promise<UserEntity | null>;
  findByEmail(email: Email): Promise<UserEntity | null>;
}
