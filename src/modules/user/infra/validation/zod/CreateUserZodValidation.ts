import CreateUserValidation from "@/modules/user/app/createUserValidation";
import CreateUserInput from "@/modules/user/app/dto/createUserInput";
import { z } from "zod";

export default class CreateUserZodValidation implements CreateUserValidation {
  static schema = z.object({
    name: z.string().min(3).max(20),
    email: z.string().email(),
    username: z.string().min(3).max(20),
    password: z.string().min(6).max(20),
    passwordConfirmation: z.string().min(6).max(20),
  });

  async validate(dto: unknown): Promise<CreateUserInput> {
    const user = CreateUserZodValidation.schema.parse(dto);

    return user;
  }
}
