import CreateUserInput from "@/modules/user/app/dto/createUserInput";

interface InputProps<T> {
  label: string;
  name: keyof T;
  placeholder: string;
}

const inputs: InputProps<CreateUserInput>[] = [
  {
    label: "Nome",
    name: "name",
    placeholder: "Nome",
  },
  {
    label: "Usuário",
    name: "username",
    placeholder: "Usuário",
  },
  {
    label: "Email",
    name: "email",
    placeholder: "E-mail",
  },
  {
    label: "Senha",
    name: "password",
    placeholder: "Senha",
  },
  {
    label: "Confirmação de senha",
    name: "passwordConfirmation",
    placeholder: "Confirmação de senha",
  },
];

export default inputs;
