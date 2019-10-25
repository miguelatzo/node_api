let dbManejador = require('../query-object');
let consultas   = require('./consultas/consultas');

function crearUsuario($request, $response){
    let correo      = $request.body.correo;
    let contrasenia = $request.body.contrasenia;

    dbManejador.one(consultas.crea_usuario, {correo: correo, contrasenia: contrasenia})
        .then((data)=>{
            $response.status(200).json({token: data.to_char})
        })
        .catch((err)=>{
            $response.status(200).json({error: JSON.stringify(err)})
        });
}
function eliminarUsuario($request, $response){
    let correo = $request.params.correo;
    dbManejador.none(consultas.elimina_usuario, {correo: correo})
        .then(()=>{
            $response.status(200).json({resultado: `Usuario "${correo}" eliminado con éxito`});
        })
        .catch((err)=>{
            console.error(err);
            $response.status(200).json({error: "Error en la base de datos"});
        });
}

module.exports = {
    crearUsuario   : crearUsuario,
    eliminarUsuario: eliminarUsuario,
};