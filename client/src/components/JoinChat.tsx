import React, { ChangeEvent, FC, useEffect, useState } from "react";

type Props = {
    name: string;
    roomID: string;
    setName: (l: string) => void;
    setRoomID: (l: string) => void;
    joinRoom: (name: string, roomID: string) => void;
};

const JoinChat: FC<Props> = ({
    name,
    roomID,
    setName,
    setRoomID,
    joinRoom,
}) => {
    const [isFormFilled, setIsFormFilled] = useState(false);

    // Disabling Button
    useEffect(() => {
        if (roomID && name) setIsFormFilled(true);
    }, [name, roomID]);

    return (
        <div className="joinChatContainer">
            <h3>Join A Chat</h3>
            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                }
                autoFocus
            />
            <input
                type="text"
                placeholder="1111111"
                value={roomID}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setRoomID(e.target.value)
                }
            />
            <button
                onClick={() => joinRoom(name, roomID)}
                disabled={!isFormFilled}>
                Join
            </button>
        </div>
    );
};

export default JoinChat;
