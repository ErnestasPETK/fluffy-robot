type FallbackErrorProps = {
    error?: { message: string },
    resetErrorBoundary?: (...args: any[]) => any


}
const FallbackError = ({ error, resetErrorBoundary }: FallbackErrorProps): JSX.Element => {

    const errorMessage = error?.message;
    if (resetErrorBoundary) {
        resetErrorBoundary();

    }
    return (
        <>
            <h1>{errorMessage && errorMessage}</h1>
        </>
    )
}

export default FallbackError;