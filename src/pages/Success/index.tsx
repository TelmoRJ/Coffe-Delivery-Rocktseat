import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Ball } from "../../components/Ball";
import { SuccessContent } from "./styles";
import { useTheme } from "styled-components";
import ilustration from "../../assets/Illustration.svg";
import { useLocation } from "react-router-dom";
import { CheckoutData } from "../Checkout";

interface SuccessData {
  state: CheckoutData;
}

export function Success() {
  const { colors } = useTheme();

  const { state } = useLocation() as SuccessData;

  console.log(state.paymentMethod);

  return (
    <SuccessContent>
      <span>
        <strong>Uhu! Pedido confirmado</strong>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </span>
      <div>
        <Ball icon={<MapPin />} iconBG={colors.purple}>
          <span>
            Entrega em{" "}
            <strong>
              {state.bairro}, {state.numero}
            </strong>{" "}
            <br /> {state.cidade}, {state.uf}
          </span>
        </Ball>

        <Ball icon={<Timer />} iconBG={colors.yellow}>
          <span>
            Previsão de entrega <br /> <strong> 20 min - 30 min </strong>
          </span>
        </Ball>

        <Ball icon={<CurrencyDollar />} iconBG={colors["yellow-dark"]}>
          <span>
            Pagamento na entrega <br />
            <strong>
              {(state.paymentMethod === "debit" && "Cartão de débito") ||
                (state.paymentMethod === "credit" && "Cartão de crédito") ||
                (state.paymentMethod === "money" && "Dinheiro")}
            </strong>
          </span>
        </Ball>
      </div>

      <img src={ilustration} alt="" />
    </SuccessContent>
  );
}
