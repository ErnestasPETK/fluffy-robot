import RadioInput from "../../components/radio-input/RadioInput";

const inputProps = {
    active: true,
    valid: true,
}

const SubscriptionRadioInput = (): JSX.Element => {

    return (
        <fieldset>
            <RadioInput  {...inputProps} type="radio" name="subscribe" label="Name" placeholder="John Smith" onChangeFn={setName} />
            <RadioInput  {...inputProps} type="radio" name="subscribe" label="Name" placeholder="John Smith" onChangeFn={setName} />
        </fieldset>)
}

export default SubscriptionRadioInput;