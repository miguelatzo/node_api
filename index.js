let express = require('express');
let app     = express();

app.get('/', function(req, res){
    res.send('Hola Mundo');
});

const port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log(`Corriendo el servidor web en el puerto ${port} gracias a Express :)`);
});