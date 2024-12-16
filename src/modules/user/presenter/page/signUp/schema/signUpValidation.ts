import { z } from "zod";

export class SignUpValidation {
  static schema = z.object({
    name: z.string().min(3).max(20),
    email: z.string().email(),
    username: z.string().min(3).max(20),
    password: z.string().min(6).max(20),
    passwordConfirmation: z.string().min(6).max(20),
  });
}

export type SignUpType = z.infer<typeof SignUpValidation.schema>;
