 /*
* @Author: Miguel Flores
* @Date:   2019-10-24 04:16:45
* @Last Modified by:   Miguel Flores
* @Last Modified time: 2019-10-25 11:13:17
*/

const consulta_token = 
    "SELECT * FROM usuarios"
    +" WHERE to_char(token, 'YY-MM-DD HH24:MI:SS') = ${token}"
;
const consulta_usuario = 
    'SELECT * FROM usuarios'
    +' WHERE correo      = ${correo}'
    +' AND   contrasenia = ${contrasenia}'
;
const inserta_token   = "UPDATE usuarios"
    +" SET token = now()"
    +" WHERE correo like ${correo}"
    +" RETURNING to_char(token, 'YY-MM-DD HH24:MI:SS')"
;
module.exports = {
    consulta_token  : consulta_token,
    consulta_usuario: consulta_usuario,
    inserta_token   : inserta_token,
}