import { FormData } from "../SignupForm"

interface Response {
    status: number,
    statusText: string
}
export const mockedAPI = async (data: FormData): Promise<Response> => {
    if (data.name === "Invalid Name")
        return new Promise(resolve => setTimeout(resolve, 3000, { status: 422, statusText: "Invalid name" }))
    else {
        return new Promise(resolve => setTimeout(resolve, 3000, { status: 200, statusText: "ok" }))

    }

} 