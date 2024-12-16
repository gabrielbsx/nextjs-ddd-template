import UseCase from "@/shared/app/useCase";
import CreateUserInput from "./dto/createUserInput";

type CreateUserUseCase = UseCase<CreateUserInput, boolean>;

export default CreateUserUseCase;
