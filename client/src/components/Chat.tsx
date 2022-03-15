import React, { FC, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import ChatList from "./ChatList";
import ChatAction from "./ChatAction";

type Props = {
    socket: Socket;
    name: string;
    roomID: string;
};

export interface IMessageData {
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
    const [messageList, setMessageList] = useState<IMessageData[]>([]);

    // Listening for Socket Events/ Messages
    useEffect(() => {
        socket.on("receive_message", (data: IMessageData) => {
            setMessageList((prev: IMessageData[]) => [...prev, data]);
        });
    }, [socket]);

    // Sending a Message
    const sendMessage = async (currentMessage: string) => {
        const messageData: IMessageData = {
            author: name,
            room: roomID,
            message: currentMessage,
            time: getTime(),
        };
        socket.emit("send_message", messageData);
        setMessageList((prev: IMessageData[]) => [...prev, messageData]);
    };

    return (
        <div className="chat-window">
            <div className="chat-header">
                <p>Realtime Chat App</p>
            </div>
            <div className="chat-body">
                <ChatList messageList={messageList} name={name}></ChatList>
            </div>
            <div className="chat-footer">
                <ChatAction sendMessage={sendMessage} />
            </div>
        </div>
    );
};

export default Chat;
