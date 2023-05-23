import * as yup from "yup";


export type UserInput = {
    name?: string
    email?: string
    age?: number
}


type ErrorMessage = {
    message: string
}

export type ValidationResult = {
    name?: ErrorMessage,
    age?: ErrorMessage,
    email?: ErrorMessage,
}

export const formSchema = yup.object({
    name: yup.string().required().min(3).max(40),
    age: yup.number().required().positive().integer().min(18),
    email: yup.string().email().required(),
});

export const useInlineValidation = (userInput: UserInput) => {
    let errors = {}
    try {
        userInput.email ? formSchema.validateSyncAt("email", userInput) : false
    } catch (err: yup.ValidationError | any) {
        errors = { ...errors, email: { message: err.errors[0] } };
    }
    try {
        userInput.name ? formSchema.validateSyncAt("name", userInput) : false
    } catch (err: yup.ValidationError | any) {
        errors = { ...errors, name: { message: err.errors[0] } };

    }
    try {
        userInput.age ? formSchema.validateSyncAt("age", userInput) : false
    } catch (err: yup.ValidationError | any) {
        errors = { ...errors, age: { message: err.errors[0] } };

    }


    return errors
}