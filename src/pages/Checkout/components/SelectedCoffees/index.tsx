import { useCart } from "../../../../hooks/useCart";
import { CoffeeCard } from "../CoffeeCard";
import { SelectedCoffessContainer, TotalPrice } from "./styles";
import { formattedPrice } from "../../../../utils/formatted";
import { useFormContext } from "react-hook-form";

export function SelectedCoffess() {
  const { cart } = useCart();
  const {
    formState: { isSubmitting },
  } = useFormContext();

  const totalCart = cart.reduce((total, cartCurrent) => {
    return total + cartCurrent.price * cartCurrent.quantity;
  }, 0);

  const frete = Number(3.78);

  return (
    <SelectedCoffessContainer>
      <strong>Cafés selecionados</strong>

      {cart.map((cart) => (
        <CoffeeCard key={cart.id} coffee={cart} />
      ))}

      <TotalPrice>
        <div>
          <span>Total de Itens</span> <span>{formattedPrice(totalCart)}</span>
        </div>
        <div>
          <span>Entrega</span> <span>{formattedPrice(frete)}</span>
        </div>

        <h3>
          <strong>Total</strong>{" "}
          <strong>{formattedPrice(totalCart - frete)}</strong>
        </h3>

        <button disabled={isSubmitting} type="submit">
          confirmar pedido
        </button>
      </TotalPrice>
    </SelectedCoffessContainer>
  );
}
