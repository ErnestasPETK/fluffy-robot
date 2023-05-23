import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { StyledRadioInput } from "./RadioInput.styled";
type ControlProps = {
    active: boolean;
};

type LabelAndValue = {
    label: string;
    value: string;
};

interface RadioInputProps extends ControlProps {
    choices: LabelAndValue[];
    onChangeFn: React.Dispatch<React.SetStateAction<string>>;
    preSelected: string;
}

const RadioInput = (props: RadioInputProps): JSX.Element => {
    const { theme } = useContext(GlobalContext);
    const { choices, onChangeFn, preSelected } = props;
    return (
        <div>
            {choices.map((choice) => {
                return (
                    <div key={choice.label}>
                        <StyledRadioInput
                            contexttheme={theme}
                            type="radio"
                            name="unique"
                            id={choice.label}
                            value={choice.value}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                onChangeFn(event.target.value)
                            }
                            checked={preSelected === choice.value}
                        />
                        <label htmlFor={choice.label}>{choice.label}</label>
                    </div>
                );
            })}
        </div>
    );
};

export default RadioInput;
