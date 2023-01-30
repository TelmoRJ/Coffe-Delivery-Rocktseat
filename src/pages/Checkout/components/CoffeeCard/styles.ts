import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;

  padding: 0 0 1.5rem 0;
  margin-top: 1.5rem;

  border-bottom: 2px solid ${({ theme }) => theme.colors["base-input"]};

  > span {
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    color: ${({ theme }) => theme.colors["base-text"]};
  }
`;

export const CoffeeCardContent = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  font-family: "Poppins", sans-serif;
  gap: 0.8rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  img {
    width: 4rem;
    height: 4rem;
  }
`;

export const AddOrRemoveContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;

  input {
    max-width: 1.4rem;
    height: 1rem;
  }
`;

export const RemoveCoffeButton = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors["base-button"]};
  color: ${({ theme }) => theme.colors["base-text"]};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 4px;
  gap: 0.3rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  padding: 0.6rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors["base-hover"]};
    -webkit-transition: background-color 100ms linear;
    -ms-transition: background-color 100ms linear;
    transition: background-color 100ms linear;
  }
`;
