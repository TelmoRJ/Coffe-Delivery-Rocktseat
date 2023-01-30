import styled from "styled-components";

export const PresentationContainer = styled.section`
  max-width: 1160px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 2rem 3rem 0;

  > img {
    display: flex;
    align-self: start;
  }
`;

export const TextContainer = styled.div`
  > h1 {
    font-family: "Baloo 2", cursive;
    font-size: 3rem;
    line-height: 3.5rem;
    margin-bottom: 1rem;
  }

  > p {
    font-family: "Roboto", sans-serif;
    font-size: 1.1rem;
  }
`;

export const InformationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 4rem;
  row-gap: 1.25rem;

  h1 {
    border: 1px solid red;
  }
`;
