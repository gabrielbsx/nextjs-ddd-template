import { HTMLAttributes } from "react";
import { classMerge } from "../utils/classMerge";

interface ErrorInputProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  errors: Record<string, { message: string }>;
}

export default function ErrorInput({
  name,
  errors,
  className,
  ...props
}: ErrorInputProps) {
  const errorMessage = errors[name];

  if (!errorMessage) return null;

  return (
    <div {...props} className={classMerge("text-red-500", className)}>
      {errorMessage.message}
    </div>
  );
}
