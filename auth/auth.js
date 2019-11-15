let dbManejador = require ('./consultas/query-object');
let consultas   = require ('./consultas/consultas');
let encripting  = require ('../encriptamiento/encriptamiento');
let neon        = require ('neon');
let stdlib      = require ('neon/stdlib');
let fluorine    = require ('fluorine');


function otorgarToken($request, $response){
    let correo      = $request.body.correo;
    let contrasenia = $request.body.contrasenia;
    
    let flow1       = new Flow({name: 'flow-token'});

    flow1.step('consultar-usuario')( $step =>{
        dbManejador.one(consultas.consulta_usuario, {correo: correo})
            .then( data => { console.error(data); $step.success(); } )
            .catch( err => { $step.fail( {error: "Error de autenticación"} ) } );
                                                                              });

    flow1.step('insertar-token')( $step =>{
        dbManejador.one(consultas.inserta_token, {correo: correo})
            .then(data => { $step.success( {token: data.to_char} )} )
            .catch(err => { $step.fail( {error: "Negación de token. Intente de nuevo."} )} );
                                                                                           });

    flow1.step('otorgar-token').dependsOn('consultar-usuario', 'insertar-token')( $step=>{
        $response.status(200).json($step.data['insertar-token']);
    }, $step=>{
        $response.status(200).json(
            {
                errores: [
                    $step.errors['consultar-usuario'], 
                    $step.errors['insertar-token']
                    ]
                                });
                                                                                                        });

}

module.exports = {
    otorgarToken: otorgarToken
};