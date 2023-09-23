const express = require('express');

//inicializaciones
const app = express();

//ajustes del servidor
app.set('port', process.env.PORT || 4000);

//iniciar el servidor
app.listen(app.get('port'), () => {
    console.log('servidor Iniciado en el puerto: ', app.get('port'));
});