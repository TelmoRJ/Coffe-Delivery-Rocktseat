import styled from "styled-components";

export const SelectedCoffessContainer = styled.section`
  max-width: 448px;
  width: 100%;
  background: ${(props) => props.theme.colors["base-card"]};
  padding: 0.7rem 2.5rem 2.5rem 2.5rem;
  border-radius: 6px 44px 6px 44px;
  position: relative;

  > strong {
    position: absolute;
    top: -2.5rem;
    left: 0;
    font-family: "Baloo 2", sans-serif;
  }
`;

export const TotalPrice = styled.footer`
  color: ${(props) => props.theme.colors["base-text"]};
  margin-top: 2rem;

  div {
    font-family: sans-serif;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    span {
      font-size: 1rem;
    }
  }

  h3 {
    font-family: "Poppins", sans-serif;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 1.8rem;
    border: none;
    text-transform: uppercase;
    color: white;
    font-weight: bold;
    padding: 1rem;
    background: ${(props) => props.theme.colors["yellow"]};
    border-radius: 4px;

    &:hover {
      background-color: ${({ theme }) => theme.colors["yellow-dark"]};
      -webkit-transition: background-color 100ms linear;
      -ms-transition: background-color 1000ms linear;
      transition: background-color 500ms linear;
    }
  }
`;
