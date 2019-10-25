let dbManejador = require ('./consultas/query-object');
let consultas   = require ('./consultas/consultas');

function otorgarToken($request, $response){
    let correo      = $request.body.correo;
    let contrasenia = $request.body.contrasenia;
    console.log($request.body);
    dbManejador.one(consultas.consulta_usuario, {correo: correo, contrasenia: contrasenia})
        .then(data => {
            console.log("a",data);
            dbManejador.one(consultas.inserta_token, {correo: correo, contrasenia: contrasenia})
                .then(data => {
                    console.log("b", data);
                    $response.status(200).json({token: data.to_char});
                })
                .catch(err => {
                    console.log("c", err);
                    $response.status(200).json({error: JSON.stringify(err)});
                });
        })
        .catch(err => {
            console.log("d", err);
            $response.status(200).json("Error de autenticación");
        });
}

module.exports = {
    otorgarToken: otorgarToken
};