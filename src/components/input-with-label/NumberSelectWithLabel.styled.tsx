import styled from "styled-components";
import { Props } from "./NumberSelectWithLabel";

type optionProps = Props;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const StyledLabel = styled.label`
  display: inline-block;
  font-family: Poppins, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  padding: 0 0 0 0.4rem;
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
  @media (min-width: 1200px) {
  }
`;

export const StyledSelect = styled.select<optionProps>`
  border: 0.0625rem solid
    ${(props) =>
    props.is_valid === "true" ? "rgb(221, 223, 229)" : "rgb(255, 153, 150)"};
  padding: 0.75rem 2.8125rem 0.75rem 1rem;
  width: 100%;
  background: #fbfbfd;
  border-radius: 0.5rem;
  outline: none;
  box-sizing: border-box;
  font-family: Poppins, sans-serif;
  font-size: 1rem;
  height: 3.125rem;
`;
export const StyledOption = styled.option<optionProps>``;
