let consultas   = require('../consultas/consultas');
let dbManejador = require('../consultas/query-object');

function autenticar($request, $response, $next){
    let token = $request.get('Token');
    dbManejador.one(consultas.consulta_token, {token: token})
        .then(data => {
            $next();
        })
        .catch(err => {
            $response.status(200).json("Error de autenticación");
        });
}

module.exports = {
    autenticar  : autenticar,
};