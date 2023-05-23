import styled from "styled-components";

type Props = {
    contexttheme: string;
}

export const StyledSignupForm = styled.div<Props>`
    width: 100%;
    height: 100%;

    background-color: ${props => props.contexttheme === "dark" ? "var(--dark-background)" : "var(--light-background)"};
    color:${props => props.contexttheme === "dark" ? "var(--dark-text-color)" : "var(--light-text-color)"};
    `;