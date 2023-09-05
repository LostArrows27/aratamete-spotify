import { cn } from "@/lib/cn";
import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error: FieldError | undefined;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, error, ...props }, ref) => {
    return (
      <div>
        <input
          type={type}
          ref={ref}
          disabled={disabled}
          className={cn(
            "flex w-full rounded-md bg-neutral-700 border border-transparent p-3 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none",
            className
          )}
          {...props}
        />
        {error && <p className="text-red-500 inset-0 mt-1">{error.message}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
