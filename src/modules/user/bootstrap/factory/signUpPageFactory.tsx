import SignUpPage from "@/modules/user/presenter/page/signUp";
import CreateUserUseCaseFactory from "./createUserUseCaseFactory";

export default function SignUpPageFasctory() {
  const createUserUseCase = CreateUserUseCaseFactory.create();

  return <SignUpPage {...{ createUserUseCase }} />;
}
