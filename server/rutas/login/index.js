const express = require('express');
const bycript = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();

let Usuario = require('./../../modelos/Usuario');

app.post('/Login', (req, res) =>{
    console.log(req.body);
    const { email, password } = req.body;
    Usuario.findOne( { email }, (err, usuario_db) =>{
         //Checando algun error
        if(err){
            return res.status(500).send({Status:'Error', message:err })
        }
        //Si no hay usuario registrado
        if(!usuario_db){
            return res.status(400).send({
            Status: 'Error',
            err:{
                message: 'Usuario o contraseña incorrecto'
            }
            });
        }

        //COMPARANDO CONTRASEÑAS CON bycript
        if(!bycript.compareSync(password, usuario_db.password)){
            return res.status(400).send({
            Status: 'Error',
            err:{
                message: 'Usuario o contraseña incorrecto'
            }
            });   
        }
        //Generando el token
        let token = jwt.sign(
            //Informacion del token
            {usuario_db}, //Usuario
            process.env.SEED, // la semilla
            {expiresIn: process.env.CADUCIDAD_TOKEN} //Caducidad
        );

        //Mostrando resultado
        res.status(200).send({
            Status:'Ok',
            Usuario: usuario_db,
            token
        });
    });
});

module.exports = app;