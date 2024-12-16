import { HTMLAttributes } from "react";
import { classMerge } from "../utils/classMerge";

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div {...props} className={classMerge("container", className)}>
      {children}
    </div>
  );
}
