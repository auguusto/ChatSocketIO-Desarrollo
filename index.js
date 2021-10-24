const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
require('./mongooseChat/connection');
const Usuario = require('./mongooseChat/modelos/Usuarios');
const Mensaje = require('./mongooseChat/modelos/Mensajes');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

server.listen(3000, () => {
  console.log('listening on *:3000');
  console.log('prueba a ver como funca');
});

var usuario = new Usuario({nombre: 'Augusto', 
			     usuario: 'cledes7', 
			     password: 'augusto'});
usuario.save();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log(usuario.nombre + ' se acaba de conectar!');
  socket.broadcast.emit('hi');
  socket.on('chat message', (msg) => {
    var mensaje = new Mensaje({
      mensaje: msg,
      usuarioCreador: usuario.usuario,
      fechaCreacion: '2021-10-22',
      flagLeido: 'false'
    })
    mensaje.save();

    io.emit('chat message', usuario.nombre +' escribio: '+ msg);	  
	  console.log('***mandarle el msj a todos en la sala');

	});
  
  socket.on('disconnect', () => {
	  console.log('user disconnected! =(');
  });
});



