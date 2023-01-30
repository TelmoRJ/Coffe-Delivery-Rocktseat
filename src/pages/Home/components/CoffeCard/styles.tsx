import styled from "styled-components";

export const CoffeCardContainer = styled.div`
  background: ${({ theme }) => theme.colors["base-card"]};
  border-radius: 6px 36px 6px 36px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 0;

  > img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }

  > h3 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors["base-text"]};
    font-family: "Roboto", sans-serif;
  }

  > p {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors["base-label"]};
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    margin-bottom: 0.5rem;
    text-align: center;
    margin-top: 0.5rem;
  }
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
  flex-wrap: wrap;

  > span {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.colors["yellow-dark"]};
    background: ${({ theme }) => theme.colors["yellow-light"]};
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    border-radius: 999px;
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    gap: 0.3rem;
    margin-top: 1rem;
    font-family: "Roboto", sans-serif;

    strong {
      font-size: 1.5rem;
      font-weight: 700;
      color: ${({ theme }) => theme.colors["base-text"]};
    }

    p {
      line-height: 1.75rem;
    }
  }
`;

export const AddCoffeContainer = styled.div`
  width: 7.5rem;
  display: flex;

  > button {
    width: 2.3rem;
    height: 2.3rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors["purple-dark"]};
    color: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px;
    margin-left: 0.3rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: ${({ theme }) => theme.colors["purple"]};
    }
  }
`;
