const express = require('express');
const app = express();

const path_login = require('./login');
const path_usuario = require('./usuario');

app.use(path_login);
app.use(path_usuario);

module.exports = app;
