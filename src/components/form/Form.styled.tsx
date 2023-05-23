import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding: 1rem 0.5rem;
`;

export const StyledTitle = styled.h2`
  font-size: 3rem;
  margin: 0 0 1rem 0;

  @media (min-width: 768px) {
    margin: 0 0 2rem 0;
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
  @media (min-width: 768px) {
    padding: 0 30% 0 0;
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
  @media (min-width: 1200px) {
    width: 30%;
  }
`;
export const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: auto;
  @media (min-width: 768px) {
    width: 80%;
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
  @media (min-width: 1200px) {
    width: 30%;
  }
`;
export const StyledAdditionalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
