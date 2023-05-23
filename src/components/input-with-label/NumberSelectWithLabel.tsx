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
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
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
                {...register(name)}
                onChange={(event) => onChangeFn(event)}
            >
                {numberArray.map((value) => {
                    return (
                        <StyledOption
                            key={value}
                            name={name}
                            id={name}
                            type={type}
                            placeholder={placeholder}
                            value={value}
                            onChange={(event) => onChangeFn(event)}
                        >
                            {" "}
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
