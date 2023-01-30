import styled from "styled-components";

export const CoffesInputContainer = styled.div`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors["base-button"]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3rem;
  border-radius: 6px;
  padding: 0.5rem;

  > input {
    width: 100%;
    height: 100%;
    text-align: center;
    background: none;
    color: ${({ theme }) => theme.colors["base-title"]};
    border: none;
    font-size: 1rem;

    &:focus {
      outline: none;
    }
  }
`;

export const Icon = styled.button.attrs({ type: "button" })`
  width: 0.8rem;
  height: 0.8rem;
  border: none;
  background: none;

  &:disabled {
    opacity: 0.4;
  }
  &:not(:disabled):hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;
