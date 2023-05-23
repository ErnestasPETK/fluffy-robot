import SignupForm from "../features/authentication/SignupForm";
import { StyledSignupForm } from "./Signup.styled";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

const Signup = (): JSX.Element => {
    const { theme } = useContext(GlobalContext);
    return (
        <StyledSignupForm contexttheme={theme}>
            <SignupForm />
        </StyledSignupForm>
    );
};

export default Signup;