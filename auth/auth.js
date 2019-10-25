let dbManejador = require ('../query-object');
let consultas   = require ('./consultas/consultas');

function otorgarToken($request, $response){
    let correo      = $request.body.correo;
    let contrasenia = $request.body.contrasenia;
    dbManejador.one(consultas.consulta_usuario, {correo: correo, contrasenia: contrasenia})
        .then(data => {
            dbManejador.one(consultas.inserta_token, {correo: correo})
                .then(data => {
                    $response.status(200).json({token: data.to_char});
                })
                .catch(err => {
                    $response.status(200).json({error: JSON.stringify(err)});
                });
        })
        .catch(err => {
            $response.status(200).json("Error de autenticación");
        });
}

module.exports = {
    otorgarToken: otorgarToken
};