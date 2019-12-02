// client.js
var io = require('socket.io-client');
var socket = io('http://localhost:3000/');
//var socket = io('https://my-socketio.herokuapp.com/');

socket.on('connect', function () {
  socket.send('hi');

  socket.on('message', function (msg) {
    var new_msg = msg +" naja !!"
    console.log(new_msg);
  });
  
});

socket.on('chat message', function (msg) {
  var new_msg = msg +" naja !!"
  console.log(new_msg);
});

interval = setInterval(function () { //#
  //console.log("จุ๊บๆ");
  socket.emit ('chat message', "FROM BOT: อิอิ");
}, 2000);
