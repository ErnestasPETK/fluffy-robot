import styled from "styled-components";

export const StyledSignupForm = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  width: auto;
  height: auto;
  @media (min-width: 768px) {
  padding:10% 20%;
  }
  @media (min-width: 1024px) {

  }
  @media (min-width: 1200px) {

  }
`;

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
  @media (min-width: 768px) {
  width: 90%;

  }
  @media (min-width: 1024px) {
  width: 60%;


  }
  @media (min-width: 1200px) {
  width: 60%;


  }
`;