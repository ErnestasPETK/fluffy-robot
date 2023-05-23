import styled from "styled-components";

type Props = {
    Theme: string;
}

export const StyledSignupForm = styled.div<Props>`
    width: 100%;
    height: 100%;

    background-color: ${props => props.Theme === "dark" ? "var(--dark-background)" : "var(--light-background)"};
    color:${props => props.Theme === "dark" ? "var(--dark-text-color)" : "var(--light-text-color)"};


    `;