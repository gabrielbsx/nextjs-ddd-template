import CreateUserAppService from "@/modules/user/app/createUserAppService";
import CreateUserInput from "@/modules/user/app/dto/createUserInput";

interface SignInPageProps {
  createUserAppService: CreateUserAppService;
}

export default function SignInPage({ createUserAppService }: SignInPageProps) {
  const onSubmit = async (data: unknown) => {
    await createUserAppService.execute(data as CreateUserInput);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
