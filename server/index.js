import express from 'express';
const app = express();
import { createServer } from 'http';
import cors from 'cors';
import { Server } from "socket.io";
const port = 3000;

app.use(cors);

const server = createServer(app);

const io = new Server(server, {
    cors : {
        origin : '*',
        methods : ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    // console.log(`user connect : ${socket.id}`);

    socket.on("join-room", ({roomId, userId, userName}) => {
        // console.log(`user ${userName} joined room : ${roomId}`);
        socket.join(roomId);
        socket.broadcast.to(roomId).emit('user-connected', {userName, userId});
    })
});

server.listen(port, (req,res) => {
    // console.log('server is runing');
});