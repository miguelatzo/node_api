const crypto     = require('crypto');
const algoritmo  = 'aes-256-cbc';
const clave      = 'qazxswedcvfrtgbnhyujmkiolp;qazxs';

function encriptar(texto) {
    const iv       = crypto.randomBytes(16);
    let cifrador   = crypto.createCipheriv(algoritmo, clave, iv);
    let encriptado = cifrador.update(texto);
    encriptado     = Buffer.concat([encriptado, cifrador.final()]);
    return { iv: iv.toString('hex'), "texto-encriptado": encriptado.toString('hex') };
}

function desencriptar(texto) {
    console.error(texto);
    const iv          = Buffer.from(texto.iv, 'hex');
    let encriptado    = Buffer.from(texto['texto-encriptado'], 'hex');
    let descifrador   = crypto.createDecipheriv(algoritmo, clave, iv);
    let desencriptado = descifrador.update(encriptado);
    console.error(desencriptado);
    desencriptado     = Buffer.concat([desencriptado, descifrador.final()]);
    return desencriptado.toString();
}

module.exports = {
    encriptar   : encriptar,
    desencriptar: desencriptar
};