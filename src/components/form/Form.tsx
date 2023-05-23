import { StyledForm, StyledTitle } from "./Form.styled";
import InlineNotification from "../inline-notification/InlineNotification";

type Props = {
    title: string;
    children?: React.ReactNode;
    onSubmit: (
        e?: React.BaseSyntheticEvent<object, any, any> | undefined
    ) => Promise<void>;
};




const Form = (props: Props): JSX.Element => {
    const { title, children, onSubmit } = props;
    return (
        <StyledForm action="submit" onSubmit={onSubmit}>
            <StyledTitle>{title}</StyledTitle>
            {children}
        </StyledForm>
    );
};

export default Form;
