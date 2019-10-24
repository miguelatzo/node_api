const express = require('express');
let app       = express();

app.use('/public', express.static('public'));
app.get('/', function($request, $response){
    $response.sendFile( __dirname +  '/public/views/index.html');
});

const operaciones = require('./rutas/operaciones/operaciones');
app.use('/operaciones', operaciones);

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`Corriendo el servidor web en el puerto ${port} gracias a Express :)`);
});