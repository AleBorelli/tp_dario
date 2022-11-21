const db = require('./db')
var express = require('express');
const bodyParser = require('body-parser');

var app = express();
const routesUsuarios = require('./routes/routes_usuarios.js');
const port = 3000

db()

var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(jsonParser, urlencodedParser)

app.use('/usuarios', routesUsuarios)

app.listen(port, () => {
    console.log(`Aplicacion corriendo en ${port}`)
})
 