import styled from "styled-components";

export const OurCoffesContainer = styled.div`
  max-width: 1160px;
  width: 100%;

  > h2 {
    font-family: "Baloo 2", cursive;
    font-size: 2rem;
    font-weight: bold;
  }
`;

export const CoffeContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
  margin-top: 4rem;
`;
