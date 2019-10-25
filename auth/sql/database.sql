
CREATE TABLE IF NOT EXISTS usuarios(
    correo      varchar(40) PRIMARY KEY,
    contrasenia chkpass     NOT NULL,
    token       timestamp   UNIQUE DEFAULT NULL
);

INSERT INTO usuarios(correo, contrasenia, token) VALUES ('miguel@gmail.com', 'miguel', now());
