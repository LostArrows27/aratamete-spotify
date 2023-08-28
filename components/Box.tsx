import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

type BoxProps = {
  children: React.ReactNode;
  className?: string;
};

function Box({ children, className }: BoxProps): ReactElement {
  return (
    <div
      className={twMerge(`bg-neutral-900 rounded-lg h-fit w-full`, className)}
    >
      {children}
    </div>
  );
}

export default Box;
