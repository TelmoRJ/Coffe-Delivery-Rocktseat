import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Ball } from "../../../../components/Ball";
import {
  InformationContainer,
  PresentationContainer,
  TextContainer,
} from "./styles";
import { useTheme } from "styled-components";
import coffe from "../../../../assets/Coffe.png";

export function Presentation() {
  const { colors } = useTheme();

  return (
    <PresentationContainer>
      <TextContainer>
        <h1>
          Encontre o café perfeito <br /> para qualquer hora do dia
        </h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <InformationContainer>
          <Ball
            iconBG={colors["yellow-dark"]}
            icon={<ShoppingCart weight="fill" />}
          >
            <span>Compra simples e segura</span>
          </Ball>
          <Ball iconBG={colors["base-text"]} icon={<Package weight="fill" />}>
            <span>Embalagem mantém o café intacto</span>
          </Ball>
          <Ball iconBG={colors["yellow"]} icon={<Timer weight="fill" />}>
            <span>Entrega rápida e rastreada</span>
          </Ball>
          <Ball iconBG={colors["purple"]} icon={<Coffee weight="fill" />}>
            <span>O café chega fresquinho até você</span>
          </Ball>
        </InformationContainer>
      </TextContainer>

      <img src={coffe} alt="" />
    </PresentationContainer>
  );
}
