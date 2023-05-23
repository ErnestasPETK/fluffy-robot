import { Message } from "./TextInputWithLabel";
import { StyledMessageInfo, StyledMessageError } from "./InputMessage.styled";

const InputMessage = ({ messageType, text }: Message): JSX.Element => {
    const type = messageType;
    const messageText = text;

    switch (type) {
        case "ERROR":
            return (
                <StyledMessageError>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        width="1rem"
                    >
                        <g clipPath="url(#a)">
                            <path
                                fill="currentColor"
                                d="M6.59.991A3.373 3.373 0 0 1 8.978.003h6.046a3.37 3.37 0 0 1 2.386.988l5.597 5.6c.633.632.99 1.49.99 2.386v6.046c0 .896-.357 1.754-.99 2.386l-5.597 5.597c-.632.633-1.49.99-2.385.99H8.977a3.374 3.374 0 0 1-2.386-.99L.99 17.41a3.374 3.374 0 0 1-.988-2.386V8.977c0-.896.356-1.754.988-2.386l5.6-5.6Zm1.613 8.764 2.208 2.203-2.208 2.245c-.436.44-.436 1.153 0 1.552.44.478 1.153.478 1.552 0L12 13.589l2.203 2.166c.44.478 1.153.478 1.552 0 .478-.399.478-1.111 0-1.552l-2.166-2.245 2.166-2.203c.478-.399.478-1.111 0-1.552-.399-.436-1.111-.436-1.552 0L12 10.411 9.755 8.203c-.399-.436-1.111-.436-1.552 0-.436.44-.436 1.153 0 1.552Z"
                            ></path>
                        </g>
                        <defs>
                            <clipPath id="a">
                                <path fill="currentColor" d="M0 0h24v24H0z"></path>
                            </clipPath>
                        </defs>
                    </svg>
                    {messageText}
                </StyledMessageError>
            );
        case "INFO":
            return (
                <StyledMessageInfo>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        width="1rem"
                    >
                        <g clipPath="url(#a)">
                            <path
                                fill="currentColor"
                                d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0Zm0 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm1.875 12h-3.75a1.125 1.125 0 0 1 0-2.25h.75v-3H10.5a1.125 1.125 0 0 1 0-2.25H12c.621 0 1.125.504 1.125 1.125v4.125h.75a1.125 1.125 0 0 1 0 2.25Z"
                            ></path>
                        </g>
                        <defs>
                            <clipPath id="a">
                                <path fill="currentColor" d="M0 0h24v24H0z"></path>
                            </clipPath>
                        </defs>
                    </svg>
                    {messageText}
                </StyledMessageInfo>
            );
        default:
            return <></>;
    }
};

export default InputMessage;
