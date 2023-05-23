import { StyledPrimaryButton, StyledSecondaryButton } from "./Button.styled";

type Props = {
    type: "primary" | "secondary";
    text?: string;
};

const Button = (props: Props): JSX.Element => {
    const { type, text } = props;

    switch (type) {
        case "primary":
            return (
                <StyledPrimaryButton type="submit">
                    {text ? text : "SUBMIT"}
                </StyledPrimaryButton>
            );
        case "secondary":
            return (
                <StyledSecondaryButton type="submit">
                    {text ? text : "SUBMIT"}
                </StyledSecondaryButton>
            );
        default:
            return <StyledSecondaryButton>SUBMIT</StyledSecondaryButton>;
    }
};

export default Button;
