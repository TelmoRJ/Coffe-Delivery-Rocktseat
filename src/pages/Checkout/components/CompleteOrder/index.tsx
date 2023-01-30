import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { TitleForm } from "../TitleForm";
import {
  FormSection,
  InputContainer,
  PaymentOptionsContainer,
  CompleteOrderContainer,
} from "./styles";
import { useTheme } from "styled-components";
import { Input } from "../Input";
import { PaymentOptions } from "../PaymentOptions";
import { useFormContext } from "react-hook-form";

export const paymentMethods = {
  credit: {
    label: "Cartão de crédito",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Cartão de débito",
    icon: <Bank size={16} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />,
  },
};

export function CompleteOrder() {
  const { register } = useFormContext();

  const { colors } = useTheme();

  return (
    <CompleteOrderContainer>
      <FormSection>
        <strong>Complete seu pedido</strong>
        <TitleForm
          icon={<MapPinLine size={20} color={colors["yellow-dark"]} />}
          title="Endereço de Entrega"
          subTitle="Informe o endereço onde deseja receber seu pedido"
        />

        <InputContainer>
          <Input type="text" placeholder="CEP" {...register("cep")} />
          <Input type="text" placeholder="Rua" {...register("rua")} />
          <Input type="number" placeholder="Numero" {...register("numero")} />
          <Input
            type="text"
            placeholder="Complemento"
            {...register("complemento")}
          />
          <Input type="text" placeholder="Bairro" {...register("bairro")} />
          <Input type="text" placeholder="Cidade" {...register("cidade")} />
          <Input type="text" placeholder="UF" {...register("uf")} />
        </InputContainer>
      </FormSection>

      <FormSection>
        <TitleForm
          icon={<CurrencyDollar size={20} color={colors["purple-dark"]} />}
          title="Pagamento"
          subTitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />
        <PaymentOptionsContainer>
          {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
            <PaymentOptions
              key={label}
              id={key}
              icon={icon}
              label={label}
              value={key}
              {...register("paymentMethod")}
            />
          ))}
        </PaymentOptionsContainer>
      </FormSection>
    </CompleteOrderContainer>
  );
}
