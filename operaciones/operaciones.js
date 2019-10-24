/*==========================================================================*/
/*                            utilería                                      */

function obtenerSoloNumeros($array){
    return $array
        .filter( $elemento =>{ return !isNaN($elemento) })
        .map(    $elemento =>{ return Number($elemento) })
    ;
}
function obtenerElementos($objetoConsulta, $parametroElemento){
    let array = Object.values($objetoConsulta);
    return array.length > 0 ?
        obtenerSoloNumeros(array) : obtenerSoloNumeros($parametroElemento.split(','))
    ;
}
/*                                                                          */
/*==========================================================================*/
/*==========================================================================*/
/*                            FUNCIONES                                     */
/*                                                                          */
/*==========================================================================*/
function getSuma($request, $response){
    let numeros   = obtenerElementos($request.query, $request.params.elementos);
    let resultado = numeros.reduce( ($acumulador, $numero) => { return $acumulador + $numero } );
    $response.send(`Resultado: ${resultado}`);
    // $response.status(200).json(`Resultado: ${resultado}`);
    // $response.status(200).json({payload: `${resultado}`});
}
function postSuma($request, $response){
    let numeros   = obtenerElementos($request.body, '');
    let resultado = numeros.reduce( ($acumulador, $numero) => { return $acumulador + $numero } );
    
    $response.status(200).json({resultado: `${resultado}`});
    // $response.status(200).json(`Resultado: ${resultado}`);
}

function getMultiplicacion($request, $response){
    let numeros   = obtenerElementos($request.query, $request.params.elementos);
    let resultado = numeros.reduce( ($acumulador, $numero) => { return $acumulador * $numero } );
    $response.status(200).json({resultado: resultado});
    
}
function postMultiplicacion($request, $response){
    let numeros   = obtenerElementos($request.body, '');
    let resultado = numeros.reduce( ($acumulador, $numero) => { return $acumulador * $numero } );
    $response.status(200).json({resultado: resultado});
    
}

function getFormulaCuadratica($request, $response){
    let numeros   = obtenerElementos($request.query, $request.params.elementos);
    //a = numeros[0], b = numeros[1], c = numeros[2] 
    let discriminante = Math.pow(numeros[1], 2) - (4 * numeros[0] * numeros[2]);
    let resultado;
    if(discriminante > 0){
        resultado = {
            "x1": ( -numeros[1] - Math.sqrt(discriminante) ) / 2 * numeros[0],
            "x2": (  numeros[1] - Math.sqrt(discriminante) ) / 2 * numeros[0],
        }
        $response.status(200).json({resultado: resultado});
    }else{
        $response.status(200).json({resultado: "no existen raíces reales"});
    }
}

function postFormulaCuadratica($request, $response){
    let numeros   = obtenerElementos($request.body, '');
    //a = numeros[0], b = numeros[1], c = numeros[2] 
    let discriminante = Math.pow(numeros[1], 2) - (4 * numeros[0] * numeros[2]);
    let resultado;
    if(discriminante > 0){
        resultado = {
            "x1": ( -numeros[1] - Math.sqrt(discriminante) ) / 2 * numeros[0],
            "x2": (  numeros[1] - Math.sqrt(discriminante) ) / 2 * numeros[0],
        }
        $response.status(200).json({resultado: resultado});
    }else{
        $response.status(200).json({resultado: "no existen raíces reales"});
    }
}

/*==========================================================================*/
/*                                                                          */
/*==========================================================================*/
/*                            MODULE EXPORTS                                */
module.exports = {
    getSuma              : getSuma,
    getMultiplicacion    : getMultiplicacion,
    getFormulaCuadratica : getFormulaCuadratica,
    postSuma             : postSuma,
    postMultiplicacion   : postMultiplicacion,
    postFormulaCuadratica: postFormulaCuadratica,
};
/*                                                                          */
/*==========================================================================*/
/*==========================================================================*/
/*                                                                          */
/*                                                                          */
/*==========================================================================*/