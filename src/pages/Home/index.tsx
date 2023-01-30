import { OurCoffes } from "./components/OurCoffes";
import { Presentation } from "./components/Presentation";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Presentation />

      <OurCoffes />
    </HomeContainer>
  );
}
