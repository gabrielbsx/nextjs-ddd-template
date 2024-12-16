import { ZodError } from "zod";
import { FieldErrors } from "react-hook-form";

type GenericErrors = Record<string, { message: string }>;

export function withErrorAdapter(
  errors: FieldErrors | ZodError
): GenericErrors {
  const errorsAdapted: GenericErrors = {};

  if (errors instanceof ZodError) {
    for (const [key, value] of Object.entries(errors.flatten().fieldErrors)) {
      if (value && value[0]) {
        errorsAdapted[key] = { message: value[0] };
      }
    }
  } else {
    for (const [key, value] of Object.entries(errors)) {
      if (value?.message) {
        errorsAdapted[key] = { message: String(value.message) };
      }
    }
  }

  return errorsAdapted;
}
