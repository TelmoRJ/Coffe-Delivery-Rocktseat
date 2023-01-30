import styled from "styled-components";
import { defaultTheme } from "../../styles/theme";

export const BallContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-family: "Roboto", sans-serif;
`;

interface BallContentProps {
  bg: string;
}

export const BallContent = styled.div<BallContentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ bg }) => bg};
  width: 2rem;
  height: 2rem;
  border-radius: 999px;

  > svg {
    color: ${({ theme }) => theme.colors.white};
  }
`;
