import React, { ChangeEvent, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";
import "./App.css";
import Chat from "./components/Chat";
import JoinChat from "./components/JoinChat";

const socket: Socket = io("http://localhost:5000");

function App() {
    const [name, setName] = useState<string>("");
    const [roomID, setRoomID] = useState<string>("");
    const [showChat, setShowChat] = useState<boolean>(false);
    // Joining room
    const joinRoom = () => {
        console.log(name, roomID);
        socket.emit("join_room", roomID);
        setShowChat(true);
    };
    return (
        <div className="App">
            {!showChat ? (
                <JoinChat
                    joinRoom={joinRoom}
                    name={name}
                    setName={setName}
                    roomID={roomID}
                    setRoomID={setRoomID}
                />
            ) : (
                <Chat socket={socket} name={name} roomID={roomID} />
            )}
        </div>
    );
}

export default App;
