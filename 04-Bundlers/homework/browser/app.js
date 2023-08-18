//(function () {
  //DEFAULT var whiteboard = window.whiteboard;
  //COMMONJS 
  let whiteboard = require('./whiteboard.js');

  //DEFAULT var socket = window.io(window.location.origin);
  //COMMONJS 
  var io = require('socket.io-client');
  //COMMONJS 
  var socket = io(window.location.origin);

  // let io = require('socket.io-client');

  // import {whiteboard} from './whiteboard.js';
  // let socket = io(window.location.origin);

  socket.on("connect", function () {
    console.log("Connected!");
  });

  socket.on("load", function (strokes) {
    strokes.forEach(function (stroke) {
      var start = stroke.start;
      var end = stroke.end;
      var color = stroke.color;
      whiteboard.draw(start, end, color, false);
    });
  });

  socket.on("draw", function (start, end, color) {
    whiteboard.draw(start, end, color, false);
  });

  whiteboard.on("draw", function (start, end, color) {
    socket.emit("draw", start, end, color);
  });


//})();
