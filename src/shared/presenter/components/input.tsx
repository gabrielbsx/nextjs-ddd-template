import { InputHTMLAttributes } from "react";
import { classMerge } from "../utils/classMerge";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={classMerge(
        "border-2 border-gray-300 rounded-lg p-2",
        className
      )}
    />
  );
}
