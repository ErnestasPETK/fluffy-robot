import Form from "../../components/form/Form";
import { StyledSignupForm, StyledInputContainer } from "./SignupForm.styled";
import TextInputWithLabel from "../../components/input-with-label/TextInputWithLabel";
import NumberSelectWithLabel from "../../components/input-with-label/NumberSelectWithLabel";
import Button from "../../components/button/Button";
import RadioInput from "../../components/radio-input/RadioInput";
import InlineNotification from "../../components/inline-notification/InlineNotification";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
    formSchema,
    useInlineValidation,
    ValidationResult,
} from "./hooks/useInlineValidation";
import { useState } from "react";
import { mockedAPI } from "./hooks/mockedAPI";

export type FormData = yup.InferType<typeof formSchema>;

const SignupForm = (): JSX.Element => {
    const [userData, setUserData] = useState({});
    const [subscribe, setSubscribe] = useState("true");
    const [submissionResponse, setSubmissionResponse] = useState({
        status: -1,
        message: "",
    });

    const title = "Registration form";

    const successfullySubmitted: boolean = submissionResponse.status !== 200;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(formSchema),
    });

    const onChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | React.FormEvent<HTMLOptionElement> | any
    ): void => {

        const { name, value } = event.target;

        setUserData({ ...userData, [name]: value });
    };

    const onSubmit = async (data: FormData) => {
        try {
            // const response = await axios.post("https://f53f521d-f81e-4933-b173-1d053bc95eb0.mock.pstmn.io/",
            //     {
            //         ...data
            //     })
            const response = await mockedAPI(data);

            setSubmissionResponse({
                status: response.status,
                message: response.statusText,
            });
        } catch (err) {
            console.log(err);
            setSubmissionResponse({ status: 404, message: "Unknown error" });
        }
    };
    const inlineErrors: ValidationResult = useInlineValidation(userData);

    return (
        <StyledSignupForm>
            <Form title={title} onSubmit={handleSubmit(onSubmit)}>
                <StyledInputContainer>
                    <TextInputWithLabel
                        register={register}
                        active={successfullySubmitted}
                        is_valid={!errors.name && !inlineErrors.name ? "true" : "false"}
                        name="name"
                        placeholder="John Smith"
                        label="Name"
                        type="text"
                        onChangeFn={onChange}
                        messageType="ERROR"
                        text={errors.name?.message || inlineErrors.name?.message}
                    />

                    <TextInputWithLabel
                        register={register}
                        active={successfullySubmitted}
                        is_valid={!errors.email && !inlineErrors.email ? "true" : "false"}
                        name="email"
                        placeholder="john.smith@example.com"
                        label="Email address"
                        type="email"
                        onChangeFn={onChange}
                        messageType="ERROR"
                        text={errors.email?.message || inlineErrors.email?.message}
                    />

                    <NumberSelectWithLabel
                        register={register}
                        active={successfullySubmitted}
                        is_valid={!errors.age && !inlineErrors.age ? "true" : "false"}
                        name="age"
                        placeholder="Select your age from the drowdown"
                        label="How old are you?"
                        type="number"
                        onChangeFn={onChange}
                        messageType={
                            errors.age?.message || inlineErrors.age?.message
                                ? "ERROR"
                                : "INFO"
                        }
                        text={
                            errors.age?.message ||
                            inlineErrors.age?.message ||
                            "You have to be 18 to proceed"
                        }
                        numberRange={100}
                    />

                    <RadioInput
                        active
                        choices={[
                            { label: "Send me newsletters", value: "true" },
                            { label: "Don't send me newsletters", value: "false" },
                        ]}
                        onChangeFn={setSubscribe}
                        preSelected={subscribe}
                    />
                </StyledInputContainer>
                {submissionResponse.status !== -1 && (
                    <InlineNotification {...submissionResponse} />
                )}

                <Button key="submit" type="primary" text="Submit form" />
            </Form>
        </StyledSignupForm>
    );
};

export default SignupForm;
