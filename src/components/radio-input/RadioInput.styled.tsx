import styled from "styled-components";

type Props = {
  contexttheme: string;
};

export const StyledRadioInputContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  width: 100%;
  height: 100%;
`;

export const StyledRadioInput = styled.input<Props>`
  font-size: 1rem;
  margin: 0.4rem 0.3rem;

  background-color: ${(props) =>
    props.contexttheme === "dark"
      ? "var(--dark-background)"
      : "var(--light-background)"};
  color: ${(props) =>
    props.contexttheme === "dark"
      ? "var(--dark-text-color)"
      : "var(--light-text-color)"};
`;
