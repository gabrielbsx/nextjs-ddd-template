import { useForm } from "react-hook-form";
import { SignUpType } from "../schema/signUpValidation";
import CreateUserAppService from "@/modules/user/app/createUserAppService";
import { withErrorAdapter } from "@/shared/infra/zod/errorAdapter";

interface SignUpHookProps {
  createUserAppService: CreateUserAppService;
}

export default function useSignUp({ createUserAppService }: SignUpHookProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpType>({});

  return {
    register,
    errors: withErrorAdapter(errors),
    onSubmit: handleSubmit(async (data: SignUpType): Promise<void> => {
      const user = {
        name: data.name,
        email: data.email,
        username: data.username,
        password: data.password,
      };

      await createUserAppService.execute(user);
    }),
  };
}
