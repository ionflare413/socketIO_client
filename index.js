// client.js
var io = require('socket.io-client');
//var socket = io('http://localhost:3000/');
var socket = io('https://my-socketio.herokuapp.com/');

socket.on('connect', function () {
  socket.send('hi');

  socket.on('message', function (msg) {
    console.log(msg);
  });
  socket.on('chat message', function (msg) {
    console.log(msg);
  });
});