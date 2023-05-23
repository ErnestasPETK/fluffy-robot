import InputMessage from "./InputMessage";
import { UseFormRegister } from "react-hook-form";
import {
    StyledSelect,
    StyledLabel,
    StyledOption,
    StyledContainer,
} from "./NumberSelectWithLabel.styled";

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
    onChangeFn: (
        event:
            | React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
            | React.FormEvent<HTMLSelectElement>
            | any
    ) => void;
    numberRange: number;
}

const NumberSelectWithLabel = (props: Props): JSX.Element => {
    const {
        register,
        active,
        is_valid,
        type,
        name,
        placeholder,
        label,
        messageType,
        text,
        onChangeFn,
        numberRange,
    } = props;

    const numberArray = Array.from(
        { length: numberRange },
        (_, index) => index + 1
    );
    return (
        <StyledContainer>
            <StyledLabel>{label}</StyledLabel>
            <StyledSelect
                disabled={!active}
                is_valid={is_valid}
                placeholder={placeholder}
                {...register(name)}
                onChange={(event) => onChangeFn(event)}
            >
                <StyledOption name="default" id="default" type={type} disabled selected>
                    {placeholder}
                </StyledOption>
                {numberArray.map((value) => {
                    return (
                        <StyledOption
                            key={value}
                            name={name}
                            id={name}
                            type={type}
                            value={value}
                        >
                            {value}
                        </StyledOption>
                    );
                })}
            </StyledSelect>

            {text && <InputMessage messageType={messageType} text={text} />}
        </StyledContainer>
    );
};
export default NumberSelectWithLabel;
