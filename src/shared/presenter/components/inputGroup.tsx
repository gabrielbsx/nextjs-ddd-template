import { classMerge } from "@/shared/presenter/utils/classMerge";
import { HTMLAttributes } from "react";

type InputGroupProps = HTMLAttributes<HTMLDivElement>;

export default function InputGroup({
  className,
  children,
  ...props
}: InputGroupProps) {
  return (
    <div {...props} className={classMerge("flex flex-col gap-2", className)}>
      {children}
    </div>
  );
}
