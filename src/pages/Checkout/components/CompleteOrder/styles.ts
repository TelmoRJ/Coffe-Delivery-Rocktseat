import styled from "styled-components";

export const CompleteOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormSection = styled.section`
  max-width: 640px;
  background: ${(props) => props.theme.colors["base-card"]};
  padding: 2rem;
  border-radius: 4px;
  position: relative;

  > strong {
    font-family: "Baloo 2", sans-serif;
    position: absolute;
    top: -2.5rem;
    left: 0;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  margin-top: 1.5rem;

  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;

  input[name="cep"] {
    grid-column: span 3;
    max-width: 12rem;
  }

  input[name="rua"] {
    grid-column: span 3;
  }

  input[name="numero"] {
    grid-column: span 1;
  }

  input[name="complemento"] {
    grid-column: span 2;
  }

  input[name="cidade"] {
    grid-column: span 1;
  }
`;

export const PaymentOptionsContainer = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
