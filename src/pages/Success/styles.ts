import styled from "styled-components";

export const SuccessContent = styled.div`
  max-width: 1160px;
  margin: 10rem auto;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    padding: 3rem;
    display: flex;
    flex: 1;
    max-width: 33rem;
    flex-direction: column;
    gap: 2rem;
    border: 2px solid ${({ theme }) => theme.colors["yellow-dark"]};
    border-radius: 0 35px 0 35px;
  }

  > span {
    position: absolute;
    top: -7rem;
    left: 0;

    strong {
      font-family: "Baloo 2", sans-serif;
      color: ${({ theme }) => theme.colors["yellow-dark"]};
      font-size: 2rem;
    }

    p {
      font-family: "Baloo 2", sans-serif;
      color: ${({ theme }) => theme.colors["base-text"]};
    }
  }
`;
