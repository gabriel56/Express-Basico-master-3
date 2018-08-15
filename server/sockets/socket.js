const {io} = require('../server');


io.on('connection', (client) => {
   
    console.log('usuario conectado');

     //emitir mensaje al cliente de bienvenida
     client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    })

    client.on('disconnect', () => {
      console.log('usuario desconectado');
    });

    // Escuchar el cliente
    client.on('enviarMensaje', (mensaje, callback) => {
        console.log(mensaje);

        if (mensaje.usuario) {
            callback({
                resp: 'TODO OKKKK'
            })
        } else {
            callback({
                resp: 'TODO NOOOO OK'
            })
        }
        
    });

   
});