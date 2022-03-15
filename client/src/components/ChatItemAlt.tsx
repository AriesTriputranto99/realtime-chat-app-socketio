import React, { FC } from "react";

type Props = {
    author: string;
    message: string;
    time: string;
};

const ChatItemAlt: FC<Props> = ({ author, message, time }) => {
    return (
        <div className="single-chat alt">
            <div className="bubble alt">
                <div className="txt">
                    <p className="name alt">{author}</p>
                    <p className="message">{message}</p>
                    <span className="timestamp">{time}</span>
                </div>
                <div className="bubble-arrow alt"></div>
            </div>
        </div>
    );
};

export default ChatItemAlt;
