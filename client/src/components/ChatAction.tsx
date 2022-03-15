import React, {
    ChangeEvent,
    FC,
    KeyboardEvent,
    useEffect,
    useState,
} from "react";

type Props = {
    sendMessage: (currentMessage: string) => void;
};

const ChatAction: FC<Props> = ({ sendMessage }) => {
    const [currentMessage, setCurrentMessage] = useState<string>("");
    const [isFilled, setIsFilled] = useState<boolean>(false);

    // Validating Inout Field
    useEffect(() => {
        if (currentMessage) setIsFilled(true);
    }, [currentMessage]);

    const handleSend = () => {
        sendMessage(currentMessage);
        setCurrentMessage("");
    };
    return (
        <>
            <input
                type="text"
                placeholder="Message"
                value={currentMessage}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setCurrentMessage(e.target.value)
                }
                onKeyUp={(e: KeyboardEvent<HTMLInputElement>) =>
                    e.key === "Enter" && handleSend()
                }
            />
            <button onClick={handleSend} disabled={!isFilled}>
                Send
            </button>
        </>
    );
};

export default ChatAction;
