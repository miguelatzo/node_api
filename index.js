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

const auth           = require('./rutas/auth/auth');
const authMiddleware = require('./auth/middleware/auth');
const usuarios       = require('./rutas/usuarios/usuarios');
const operaciones    = require('./rutas/operaciones/operaciones');
app.use('/auth'       , auth);
app.use('/operaciones', authMiddleware.autenticar);
app.use('/operaciones', operaciones);
app.use('/usuarios'   , authMiddleware.autenticar);
app.use('/usuarios'   , usuarios);

const port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`Corriendo el servidor web en el puerto ${port} gracias a Express :)`);
});