const express    = require('express');
const bodyParser = require('body-parser'); 
let app          = express();

//peticiones post,put,patch. las que contengan body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(  { extended: true }  ));

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