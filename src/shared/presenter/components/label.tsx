import { LabelHTMLAttributes } from "react";
import { classMerge } from "../utils/classMerge";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({ className, children, ...props }: LabelProps) {
  return (
    <label
      {...props}
      className={classMerge("block text-sm font-semibold", className)}
    >
      {children}
    </label>
  );
}
