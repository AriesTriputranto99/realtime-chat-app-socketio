// Getting ENV variables
import dotenv from "dotenv";
dotenv.config();
const PORT: string | number = process.env.PORT || 5000;

// Regular Imports
import express, { Express, Request, Response } from "express";
import http from "http";
import cors from "cors";
import { Server, Socket } from "socket.io";

// Initiating App
const app: Express = express();
const server: http.Server = http.createServer(app);

// Middlewares
app.use(cors());

// Initiating Scocket Server
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

// Socket IO events
// Whenever someone connects the following is executed
io.on("connection", (socket: Socket) => {
    console.log("A User is connected", socket.id);
    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`User ${socket.id} Joined The Room: ${data}`);
    });
    // Whenever someone disonnects the following is executed
    socket.on("disconnect", () => {
        console.log("A User is Disconnected", socket.id);
    });
});

// GET API
app.get("/api", (req: Request, res: Response) => {
    res.status(200).json({ message: "Hello World" });
});

// Listening at PORT
server.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
