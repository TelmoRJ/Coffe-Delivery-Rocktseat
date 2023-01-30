import { InputHTMLAttributes, forwardRef } from "react";
import { InputStyle } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return <InputStyle {...props} ref={ref} />;
  }
);
