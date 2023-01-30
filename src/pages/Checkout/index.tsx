import { CheckoutContainer, Form } from "./styles";
import { CompleteOrder } from "./components/CompleteOrder";
import { SelectedCoffess } from "./components/SelectedCoffees";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  money = "money",
}

const checkoutType = z.object({
  cep: z.string().min(8),
  rua: z.string().min(3),
  bairro: z.string().min(3),
  cidade: z.string().min(3),
  uf: z.string().min(2).max(2),
  complemento: z.string().min(3),
  numero: z.string().min(1).max(4),
  paymentMethod: z.nativeEnum(PaymentMethods),
});

export type CheckoutData = z.infer<typeof checkoutType>;

export function Checkout() {
  const methods = useForm<CheckoutData>({
    resolver: zodResolver(checkoutType),
  });

  const { handleSubmit } = methods;

  const navigate = useNavigate();

  function handleSubimitCoffe(data: CheckoutData) {
    navigate("/checkout/success", { state: data });
  }

  return (
    <FormProvider {...methods}>
      <CheckoutContainer>
        <Form onSubmit={handleSubmit(handleSubimitCoffe)}>
          <CompleteOrder />

          <SelectedCoffess />
        </Form>
      </CheckoutContainer>
    </FormProvider>
  );
}
