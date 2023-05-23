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
    const { active, choices, onChangeFn, preSelected } = props;
    return (
        <div>
            {choices.map((choice) => {
                return (
                    <div key={choice.label}>
                        <input
                            type="radio"
                            name="unique"
                            id={choice.label}
                            value={choice.value}
                            onChange={(event) => onChangeFn(event.target.value)}
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
