import {
    StyledSuccessfullNotification,
    StyledUnsuccessfullNotification,
} from "./InlineNotification.styled";

type Props = {
    status?: number;
    message?: string;
};

const InlineNotification = (props: Props): JSX.Element => {
    const { status, message } = props;

    return (
        <>
            {status &&
                (status === 200 ? (
                    <StyledSuccessfullNotification>
                        Form sent successfully!
                    </StyledSuccessfullNotification>
                ) : (
                    <StyledUnsuccessfullNotification>
                        Error sending form: {message}
                    </StyledUnsuccessfullNotification>
                ))}
        </>
    );
};

export default InlineNotification;
