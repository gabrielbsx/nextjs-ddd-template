import CreateUserUseCase from "@/modules/user/app/createUserUseCaseImpl";
import InputGroup from "@/shared/presenter/components/inputGroup";
import Label from "@/shared/presenter/components/label";
import Input from "@/shared/presenter/components/input";
import Button from "@/shared/presenter/components/button";
import Container from "@/shared/presenter/components/container";
import ErrorInput from "@/shared/presenter/components/errorInput";
import useSignUp from "./hook/useSignUp";
import inputs from "./inputs";

interface SignUpPageProps {
  createUserUseCase: CreateUserUseCase;
}

export default function SignUpPage({ createUserUseCase }: SignUpPageProps) {
  const { register, onSubmit, errors } = useSignUp({
    createUserUseCase,
  });

  return (
    <div>
      <Container className="mx-auto">
        <div className="min-h-screen flex items-center justify-center">
          <section className="mx-auto bg-neutral-800 rounded-lg p-5 w-1/2">
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              {inputs.map(({ label, name, placeholder }) => (
                <InputGroup key={name}>
                  <Label>{label}</Label>
                  <Input
                    {...register(name, {
                      required: "Campo obrigatório",
                    })}
                    placeholder={placeholder}
                  />
                  <ErrorInput name={name} errors={errors} />
                </InputGroup>
              ))}
              <Button type="submit">Sign In</Button>
            </form>
          </section>
        </div>
      </Container>
    </div>
  );
}
