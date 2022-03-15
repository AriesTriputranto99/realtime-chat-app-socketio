import React, { FC } from "react";

type Props = {
    author: string;
    message: string;
    time: string;
};

const ChatItem: FC<Props> = ({ author, message, time }) => {
    return (
        <div className="single-chat">
            <div className="bubble">
                <div className="txt">
                    <p className="name">{author}</p>
                    <p className="message">{message}</p>
                    <span className="timestamp">{time}</span>
                </div>
                <div className="bubble-arrow"></div>
            </div>
        </div>
    );
};

export default ChatItem;
