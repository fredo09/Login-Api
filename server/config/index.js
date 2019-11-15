/**
* Configurar Variables Globales "process.env"
*/

//====================
//  Puerto
//====================

process.env.PORT = process.env.PORT || 3000

//====================
//  Base de datos
//====================

process.env.DB_ = process.env.DB_ || 'mongodb://localhost:27017/Login'

//====================
//  semilla de autenticacion
//====================

process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//====================
//  Vencimiento del Token
//====================

process.env.CADUCIDAD_TOKEN = '48h' ;