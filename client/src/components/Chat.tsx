import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { Socket } from "socket.io-client";

type Props = {
    socket: Socket;
    name: string;
    roomID: string;
};

interface IMessageData {
    author: string;
    room: string;
    message: string;
    time: string;
}

const getTime = (): string => {
    const date = new Date(Date.now());
    return `${String(date.getHours()).padStart(2, "0")}:${String(
        date.getMinutes()
    ).padStart(2, "0")}`;
};

const Chat: FC<Props> = ({ socket, name, roomID }) => {
    // States
    const [currentMessage, setCurrentMessage] = useState<string>("");
    const [isFilled, setIsFilled] = useState<boolean>(false);
    const [messageList, setMessageList] = useState<IMessageData[]>([]);

    // Validating Inout Field
    useEffect(() => {
        if (currentMessage) setIsFilled(true);
    }, [currentMessage]);

    // Listening for Socket Events/ Messages
    useEffect(() => {
        socket.on("receive_message", (data: IMessageData) => {
            setMessageList((prev: IMessageData[]) => [...prev, data]);
        });
    }, [socket]);

    // Sending a Message
    const sendMessage = async () => {
        const messageData: IMessageData = {
            author: name || "Khalil",
            room: roomID || "1111",
            message: currentMessage,
            time: getTime(),
        };
        socket.emit("send_message", messageData);
        setMessageList((prev: IMessageData[]) => [...prev, messageData]);
        setCurrentMessage("");
    };

    return (
        <div className="chat-window">
            <div className="chat-header">
                <p>Live Chat</p>
            </div>
            <div className="chat-body">
                {messageList.map(({ message }, index) => (
                    <h1 key={index}>{message}</h1>
                ))}
            </div>
            <div className="chat-footer">
                <input
                    type="text"
                    placeholder="Message"
                    value={currentMessage}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setCurrentMessage(e.target.value)
                    }
                />
                <button onClick={sendMessage} disabled={!isFilled}>
                    Send
                </button>
            </div>
        </div>
    );
};

export default Chat;
