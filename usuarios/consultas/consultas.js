
const elimina_usuario = "DELETE FROM usuarios"
    + " WHERE correo like ${correo}"
;
const crea_usuario = "INSERT INTO usuarios(correo, contrasenia, token)"
    + " VALUES (${correo}, ${contrasenia}, now())"
    + " RETURNING to_char(token, 'YY-MM-DD HH:MI:SS')"
;

module.exports = {
    elimina_usuario: elimina_usuario,
    crea_usuario   : crea_usuario
};