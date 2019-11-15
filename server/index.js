const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

require('./config');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

// Rutas 
app.use(require('./rutas'));

//Conexion a mongodb
mongoose.connect(process.env.DB_,
                 { useNewUrlParser: true , useUnifiedTopology: true} , (err, res) =>{
    if(err) throw console.log(err);
    console.log(`Conexion establecida a ${process.env.DB_}`);
  });

app.listen(process.env.PORT, () => {
    console.log(`Conexion establecida en el puerto ${process.env.PORT}`);
});