import React, { FC } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { IMessageData } from "./Chat";
import ChatItem from "./ChatItem";
import ChatItemAlt from "./ChatItemAlt";

type Props = {
    messageList: IMessageData[];
    name: string;
};

const ChatList: FC<Props> = ({ messageList, name }) => {
    return (
        <ScrollToBottom className="message-container speech-wrapper">
            {messageList.map(
                ({ message, author, time }: IMessageData, index: number) =>
                    name === author ? (
                        <ChatItemAlt
                            message={message}
                            author={author}
                            time={time}
                            key={index}
                        />
                    ) : (
                        <ChatItem
                            message={message}
                            author={author}
                            time={time}
                            key={index}
                        />
                    )
            )}
        </ScrollToBottom>
    );
};

export default ChatList;
