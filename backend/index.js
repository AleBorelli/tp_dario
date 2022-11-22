const db = require('./db')
const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const routesUsuarios = require('./routes/routes_usuarios.js');

var app = express();
const port = 3000

db()

// create application/x-www-form-urlencoded parser
app.use(morgan('dev'))
app.use(express.json()) 
app.use(cors())
app.use(express.urlencoded({extended: false}))

app.use('/usuarios', routesUsuarios)

app.listen(port, () => {
    console.log(`Aplicacion corriendo en ${port}`)
})
 