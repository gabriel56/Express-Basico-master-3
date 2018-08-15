const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();

let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//IO = esta es la comunicación del backend // 
let io = socketIO(server);

io.on('connection', (client) => {
   
    console.log('usuario conectado');

    client.on('disconnect', () => {
      console.log('usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (mensaje) => {
        console.log(mensaje);
    });


});





server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});