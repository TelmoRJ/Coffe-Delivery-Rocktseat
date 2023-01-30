import styled from "styled-components";

export const InputStyle = styled.input`
  height: 2.5rem;
  font-size: 0.8;
  color: ${({ theme }) => theme.colors["base-text"]};
  padding: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  background: ${({ theme }) => theme.colors["base-input"]};
  border-radius: 5px;
  transition: all 0.4s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors["yellow-dark"]};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors["base-label"]};
  }
`;
