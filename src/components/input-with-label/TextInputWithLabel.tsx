import {
    StyledContainer,
    StyledInput,
    StyledLabel,
} from "./TextInputWithLabel.styled";
import InputMessage from "./InputMessage";
import { UseFormRegister } from "react-hook-form";

export type Message = {
    messageType?: "INFO" | "ERROR";
    text?: string;
};

type ControlProps = {
    active: boolean;
    is_valid: string;
};

export interface Props extends Message, ControlProps {
    register: UseFormRegister<any>;
    type: string;
    name: string;
    label: string;
    placeholder: string;
    value?: string;
    onChangeFn: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInputWithLabel = (props: Props): JSX.Element => {
    const {
        register,
        active,
        is_valid,
        type,
        name,
        placeholder,
        label,
        value,
        messageType,
        text,
        onChangeFn,
    } = props;
    return (
        <StyledContainer>
            <StyledLabel htmlFor={name}>{label}</StyledLabel>
            <StyledInput
                {...register(name)}
                name={name}
                id={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(event) => onChangeFn(event)}
                is_valid={is_valid}
                disabled={!active}
            />
            {text && <InputMessage messageType={messageType} text={text} />}
        </StyledContainer>
    );
};

export default TextInputWithLabel;
