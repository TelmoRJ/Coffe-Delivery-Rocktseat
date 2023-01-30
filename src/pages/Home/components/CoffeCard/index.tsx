import { ShoppingCart } from "phosphor-react";
import {
  AddCoffeContainer,
  CardFooter,
  CoffeCardContainer,
  Tags,
} from "./styles";
import { CoffesInput } from "../../../../components/CoffesInput";
import { Coffee } from "../../../../@types/coffe";
import { useCart } from "../../../../hooks/useCart";
import { useState } from "react";

interface CoffeCardProps {
  coffee: Coffee;
}

export function CoffeCard({
  coffee: { tags, id, name, description, price, image },
}: CoffeCardProps) {
  const [valueInput, setValueInput] = useState(1);
  const { addCoffee } = useCart();

  function handleIncrement() {
    setValueInput(valueInput + 1);
  }

  function handleDecrement() {
    if (valueInput <= 1) return;
    setValueInput(valueInput - 1);
  }

  function handleAddCart() {
    const newCoffee = {
      id,
      name,
      tags,
      description,
      price,
      image,
      quantity: valueInput,
    };
    addCoffee(newCoffee);
  }

  return (
    <CoffeCardContainer>
      <img src={`/${image}`} alt="" />

      <Tags>
        {tags.map((tag) => (
          <span key={`${id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <h3>{name}</h3>

      <p>{description}</p>

      <CardFooter>
        <div>
          <p>R$</p>
          <strong>{price}</strong>
        </div>

        <AddCoffeContainer>
          <CoffesInput
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            value={valueInput}
          />

          <button onClick={handleAddCart}>
            <ShoppingCart weight="fill" size={20} />
          </button>
        </AddCoffeContainer>
      </CardFooter>
    </CoffeCardContainer>
  );
}
