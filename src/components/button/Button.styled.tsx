import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: 1rem;
  min-height: 2.5rem;
  min-width: fit-content;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  border: 0px;
  margin: 0px;
  border-radius: 0.5rem;
  cursor: pointer;
  width: auto;
  max-width: 50%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.7rem 1rem;
  background: none;
  color: rgb(59, 191, 194);
  outline: rgb(59, 191, 194) solid 0.125rem;
  outline-offset: -0.125rem;

  @media (min-width: 768px) {
    max-width: 30%;
  }
  @media (min-width: 1024px) {
  }
  @media (min-width: 1200px) {
  }
`;

export const StyledPrimaryButton = styled(StyledButton)`
  background-color: rgb(59, 191, 194);
  color: white;
  &:hover {
    background-color: rgba(59, 191, 194, 0.7);
    outline: rgba(59, 191, 194, 0.7) solid 0.125rem;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1200px) {
  }
`;

export const StyledSecondaryButton = styled(StyledButton)`
  &:hover {
    outline: rgba(59, 191, 194, 0.7) solid 0.125rem;
    color: rgba(59, 191, 194, 0.7);
  }
  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1200px) {
  }
`;
