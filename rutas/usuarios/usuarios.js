/*
* @Author: Miguel Flores
* @Date:   2019-10-25 10:39:58
* @Last Modified by:   Miguel Flores
* @Last Modified time: 2019-10-25 11:31:04
*/

let router   = require('../route-object');
let usuarios = require('../../usuarios/usuarios');

router.route('/crear')
    .post(usuarios.crearUsuario);

router.route('/:correo/eliminar')
    .all(usuarios.eliminarUsuario);

module.exports = router;
