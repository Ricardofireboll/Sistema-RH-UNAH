const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const error = require('./helpers/errors')
const app = express();

//configuracion
app.set('port', config.app.port);

//Middleware
app.use(cors())
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

// Routers
const routerUsuarios = require('./routes/usuarios.Routes');
app.use('/RR-HH/Usuarios', routerUsuarios);


const routerEmpleadosPAA = require('./routes/empleadosPAA.Routes');
app.use('/RR-HH/PAA', routerEmpleadosPAA);

const routerEmpleados = require('./routes/empleados.Routes');
app.use('/RR-HH/Empleados', routerEmpleados);

const routerAsistencia = require('./routes/asistencia.Routes');
app.use('/RR-HH/Asistencia', routerAsistencia);

const routerMonitoreo = require('./routes/monitoreo.Routes');
app.use('/RR-HH/Monitoreo', routerMonitoreo);

app.use(error);

module.exports = app;