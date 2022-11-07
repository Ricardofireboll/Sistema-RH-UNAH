const express = require('express');

const respuesta = require('../helpers/respuestas');
const controlador = require('../controllers/controladorEmpleadosPAA');

const routerEmpleadosPAA = express.Router();


//obtener todos los empleados PAA
routerEmpleadosPAA.get('/empleadosPAA', /*seguridad(),*/ empleadosPAA);

//Obtener un empleado de PAA
routerEmpleadosPAA.get('/empleadosPAA/:id', unEmpleado);

async function empleadosPAA(req, res, next){
    try {
        const items = await controlador.traerEmpleadosPAA();
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
};

async function unEmpleado(req, res, next){
    try {
        const items = await controlador.traerEmpleadoPAA(req.params.id);
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
};

module.exports = routerEmpleadosPAA