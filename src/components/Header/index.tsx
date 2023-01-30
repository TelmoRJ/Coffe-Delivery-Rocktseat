import { MapPin, ShoppingCart } from "phosphor-react";
import {
  HeaderContainer,
  HeaderContent,
  ButtonHeaderContainer,
  ButtonHeaderStyled,
  TextButtonHeader,
  Quantity,
} from "./styles";
import logo from "../../assets/Logo.svg";
import { useCart } from "../../hooks/useCart";
import { NavLink } from "react-router-dom";

export function Header() {
  const { amountOfCarts } = useCart();

  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>

        <ButtonHeaderContainer>
          <ButtonHeaderStyled variant="map">
            <MapPin weight="fill" />
            <TextButtonHeader>Rio de Janeiro, SF</TextButtonHeader>
          </ButtonHeaderStyled>

          <NavLink to="/checkout">
            <ButtonHeaderStyled variant="cart">
              {amountOfCarts > 0 && (
                <Quantity>
                  {" "}
                  <span>{amountOfCarts}</span>{" "}
                </Quantity>
              )}

              <ShoppingCart weight="fill" />
            </ButtonHeaderStyled>
          </NavLink>
        </ButtonHeaderContainer>
      </HeaderContent>
    </HeaderContainer>
  );
}
