import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 6.2rem;
  display: flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  background: ${(props) => props.theme.colors.white};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const HeaderContent = styled.header`
  max-width: 1160px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonHeaderContainer = styled.div`
  display: flex;
  gap: 0.6rem;
`;

interface ButtonHeaderStyledProps {
  variant: "map" | "cart";
}

export const ButtonHeaderStyled = styled.button<ButtonHeaderStyledProps>`
  border: 0;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 1.3rem;
  padding: 0.6rem 0.5rem;
  border-radius: 0.4rem;
  color: ${({ theme, variant }) =>
    variant === "map" ? theme.colors["purple"] : theme.colors["yellow-dark"]};
  background: ${({ theme, variant }) =>
    variant === "map"
      ? theme.colors["purple-light"]
      : theme.colors["yellow-light"]};

  > p {
    color: ${({ theme }) => theme.colors["purple-dark"]};
  }

  position: relative;
`;

export const TextButtonHeader = styled.p`
  font-size: 0.8rem;
`;

export const Quantity = styled.div`
  position: absolute;
  right: -0.4rem;
  top: -0.5rem;

  background: ${({ theme }) => theme.colors["yellow-dark"]};
  height: 1.2rem;
  width: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;

  > span {
    font-size: 0.9rem;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
  }
`;
