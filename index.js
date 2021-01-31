var ex = require('express');
var socket = require('socket.io');

var app = ex();
var server = app.listen(4000, function(){
    console.log("Listening to port 4000 .....");
});

// Static Files

app.use(ex.static('public'));

//Socket Setup

io = socket(server);

io.on('connection', (socket)=>{
    console.log("Connection has been made", socket.id);

    socket.on('chat', (data)=>{
        io.sockets.emit('chat', data);
    });
    
    socket.on('typing', (data)=>{
        socket.broadcast.emit('typing', data);
    })
});