import { useForm } from "react-hook-form";
import { withErrorAdapter } from "@/shared/infra/zod/errorAdapter";
import { zodResolver } from "@hookform/resolvers/zod";
import CreateUserUseCase from "@/modules/user/app/createUserUseCaseImpl";
import CreateUserInput from "@/modules/user/app/dto/createUserInput";
import CreateUserZodValidation from "@/modules/user/infra/validation/zod/CreateUserZodValidation";

interface SignUpHookProps {
  createUserUseCase: CreateUserUseCase;
}

export default function useSignUp({ createUserUseCase }: SignUpHookProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateUserInput>({
    resolver: zodResolver(CreateUserZodValidation.schema),
  });

  return {
    register,
    errors: withErrorAdapter(errors),
    onSubmit: handleSubmit(async (data: CreateUserInput): Promise<void> => {
      const user = {
        name: data.name,
        email: data.email,
        username: data.username,
        password: data.password,
      };

      await createUserUseCase.execute(user);
    }),
  };
}
