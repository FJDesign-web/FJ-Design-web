const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// When a user connects
io.on('connection', (socket) => {
    console.log('a user connected');

    // When a user sends a message
    socket.on('userMessage', (data) => {
        console.log('Message received:', data);
        // Broadcast message to all users, including sender
        io.emit('newMessage', data);
    });

    // When a user disconnects
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

// Start the server
server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});