import SignInPage from "../presenter/page/signIn";
import CreateUserAppServiceFactory from "./createUserAppServiceFactory";

export function CreateUserPageFactory() {
  const createUserAppService = CreateUserAppServiceFactory.create();

  return <SignInPage {...{ createUserAppService }} />;
}
