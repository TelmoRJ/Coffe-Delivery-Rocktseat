import { PaymentMethodContainer, ContentContainer } from "./styles";
import React, { InputHTMLAttributes, forwardRef } from "react";

type PaymentOptionsProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: React.ReactNode;
  label: string;
};

export const PaymentOptions = forwardRef<HTMLInputElement, PaymentOptionsProps>(
  ({ id, icon, label, ...props }, ref) => {
    return (
      <PaymentMethodContainer>
        <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
        <label htmlFor={id}>
          <ContentContainer>
            {icon}
            {label}
          </ContentContainer>
        </label>
      </PaymentMethodContainer>
    );
  }
);
