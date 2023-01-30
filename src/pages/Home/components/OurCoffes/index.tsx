import { coffees } from "../../../../data/coffes";
import { CoffeCard } from "../CoffeCard";
import { CoffeContainer, OurCoffesContainer } from "./styles";

export function OurCoffes() {
  return (
    <OurCoffesContainer>
      <h2>Nossos cafés</h2>

      <CoffeContainer>
        {coffees.map((coffe) => (
          <CoffeCard key={coffe.id} coffee={coffe} />
        ))}
      </CoffeContainer>
    </OurCoffesContainer>
  );
}
