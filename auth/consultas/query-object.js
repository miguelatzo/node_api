/*
* @Author: Miguel Flores
* @Date:   2019-10-24 04:17:23
* @Last Modified by:   Miguel Flores
* @Last Modified time: 2019-10-24 04:32:32
*/
const libreriaPromesas     = require('bluebird');
const opciones             = { promiseLib: libreriaPromesas };
let pgPromise              = require('pg-promise')(opciones);
// let pgPromise = require('pg-promise');
// pgPromise     = pgPromise(opciones);
const credencialesConexion = 'postgres://postgres:postgres@localhost:5432/node_api';

var dbManejador = pgPromise(credencialesConexion);
module.exports  = dbManejador;