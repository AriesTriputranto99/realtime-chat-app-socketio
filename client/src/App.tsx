import React, { ChangeEvent, useEffect, useState } from "react";
import io from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:5000");

function App() {
    const [name, setName] = useState<string>("");
    const [roomID, setRoomID] = useState<string>("");
    const [isFormFilled, setIsFormFilled] = useState(false);
    useEffect(() => {
        if (roomID && name) setIsFormFilled(true);
    }, [name, roomID]);
    const joinRoom = () => {
        console.log(name, roomID);
        socket.emit("join_room", roomID);
    };
    return (
        <div className="App">
            <div className="joinChatContainer">
                <h3>Join A Chat</h3>
                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setName(e.target.value)
                    }
                />
                <input
                    type="text"
                    placeholder="1111111"
                    value={roomID}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setRoomID(e.target.value)
                    }
                />
                <button onClick={joinRoom} disabled={!isFormFilled}>
                    Join
                </button>
            </div>
        </div>
    );
}

export default App;
