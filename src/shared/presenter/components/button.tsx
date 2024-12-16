import { ButtonHTMLAttributes } from "react";
import { classMerge } from "../utils/classMerge";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={classMerge(
        "border-2 border-gray-300 rounded-lg p-2",
        className
      )}
    >
      {children}
    </button>
  );
}
