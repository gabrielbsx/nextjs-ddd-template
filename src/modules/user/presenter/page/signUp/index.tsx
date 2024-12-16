import CreateUserAppService from "@/modules/user/app/createUserAppService";
import InputGroup from "@/shared/presenter/components/inputGroup";
import Label from "@/shared/presenter/components/label";
import Input from "@/shared/presenter/components/input";
import Button from "@/shared/presenter/components/button";
import Container from "@/shared/presenter/components/container";
import useSignUp from "./hook/useSignUp";
import ErrorInput from "@/shared/presenter/components/errorInput";

interface SignUpPageProps {
  createUserAppService: CreateUserAppService;
}

export default function SignUpPage({ createUserAppService }: SignUpPageProps) {
  const { register, onSubmit, errors } = useSignUp({
    createUserAppService,
  });

  return (
    <div>
      <Container className="mx-auto">
        <div className="min-h-screen flex items-center justify-center">
          <section className="mx-auto bg-neutral-800 rounded-lg p-5 w-1/2">
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <InputGroup>
                <Label>Usuário</Label>
                <Input
                  {...register("username", {
                    required: "Campo obrigatório",
                  })}
                  placeholder="Usuário"
                />
                <ErrorInput name="username" errors={errors} />
              </InputGroup>

              <InputGroup>
                <Label>Senha</Label>
                <Input
                  {...register("password", {
                    required: "Campo obrigatório",
                  })}
                  placeholder="Senha"
                />
                <ErrorInput name="password" errors={errors} />
              </InputGroup>

              <Button type="submit">Sign In</Button>
            </form>
          </section>
        </div>
      </Container>
    </div>
  );
}
