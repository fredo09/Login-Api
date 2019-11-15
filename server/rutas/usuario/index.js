const express = require('express');
const bcrypt = require('bcryptjs');
const app = express();

let Usuario = require('./../../modelos/Usuario');

const { VerificaToken } = require('./../../middlewares');

app.get('/Usuario', VerificaToken , (req, res) => {
    Usuario.find({ estado: true }, (err, usuario_db) => {
        if (err) {
            return res.status(400).send({
                Status: 'Error',
                Message: err
            });
        }

        Usuario.count({ estado: true } , (err, NumTotal) => {
            res.status(200).send({
                Status: 'Ok',
                Usuarios: usuario_db,
                Message: 'Usuario Obtenido',
                Total: NumTotal
            });
        })
    })
});

app.post('/Usuario', (req, res) => {
    const{ nombre, email, password }  = req.body;

    let usuario = new Usuario({
        nombre,
        email,
        password: bcrypt.hashSync(password, 10)
    })

    usuario.save((err, usuario_db) => {
        if (err) {
            return res.status(400).send({Message: err, Status:'Error'});
        }

        res.status(201).send({
            Status: 'Ok',
            usuario: usuario_db,
            Message: 'Usuario Creado Correctamente!'
        });
    })
});


module.exports = app;

