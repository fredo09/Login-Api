/**
* Middlewares para la autenticacion
*/
const jwt = require('jsonwebtoken');

// =========================
// VERFICICACION DE TOKEN
// =========================

let VerificaToken = (req, res, next) => {
  //Obteniendo el header de la peticion
  let token = req.get('token');

  jwt.verify(token, process.env.SEED, (err, decoded)=>{
    if(err){
        return res.status(401).send({
          Status : 'Error',
          err:{
            Message: "Token no valido"
          }
        })
      }

      //tener toda la informacion del usuario en cualquier peticion
      req.usuario = decoded.usuario_db;
      console.log('user ', req.usuario);

      //Verifica el token y sigue corriendo el programa
      next();
  });
}

module.exports = {
    VerificaToken
}