import { Trash } from "phosphor-react";
import { CoffesInput } from "../../../../components/CoffesInput";
import {
  AddOrRemoveContainer,
  CoffeeCardContainer,
  CoffeeCardContent,
  RemoveCoffeButton,
} from "./styles";
import { useTheme } from "styled-components";
import { Cart, useCart } from "../../../../hooks/useCart";
import { formattedPrice } from "../../../../utils/formatted";

interface CoffeeCardProps {
  coffee: Cart;
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { colors } = useTheme();
  const { handleIncrementCart, handleDecrementCart, removeCart } = useCart();

  const totalCoffe = coffee.price * coffee.quantity;

  function handleDecrement() {
    handleDecrementCart(coffee.id);
  }

  function handleIncrement() {
    handleIncrementCart(coffee.id);
  }

  return (
    <CoffeeCardContainer>
      <CoffeeCardContent>
        <img src={`${coffee.image}`} alt="" />

        <div>
          <p>{coffee.name}</p>
          <AddOrRemoveContainer>
            <CoffesInput
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              value={coffee.quantity}
            />
            <RemoveCoffeButton onClick={() => removeCart(coffee.id)}>
              <Trash size={16} color={colors.purple} /> Remover
            </RemoveCoffeButton>
          </AddOrRemoveContainer>
        </div>
      </CoffeeCardContent>

      <span>{formattedPrice(totalCoffe)}</span>
    </CoffeeCardContainer>
  );
}
