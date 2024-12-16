import SignUpPage from "../presenter/page/signUp";
import CreateUserAppServiceFactory from "./createUserAppServiceFactory";

export function SignUpPageFactory() {
  const createUserAppService = CreateUserAppServiceFactory.create();

  return <SignUpPage {...{ createUserAppService }} />;
}
