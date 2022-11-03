const express = require('express');

const respuesta = require('../helpers/respuestas');
const controlador = require('../controllers/controladorEmpleados');
const seguridad = require('../auth/seguridad');

const routerEmpleados = express.Router();


//obtener todos los empleados
routerEmpleados.get('/', /*seguridad(),*/ empleados);
//traer empleados por fechas
routerEmpleados.get('/fechas', empleadosfecha);
/**********************************************************************/
//traer empleados por consultas
routerEmpleados.get('/consulta', Consulta);
/**********************************************************************/
//Obtener un empleado
routerEmpleados.get('/:id', unEmpleado);
//Eliminar un empleado
routerEmpleados.delete('/:id', eliminar);

//Crear un empleado
routerEmpleados.post('/new', insertarEmplead);


async function empleados(req, res, next){
    try {
        const items = await controlador.empleados();
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
};

async function empleadosfecha(req, res, next){
    try {
        console.log(req.query.fecha1);
        console.log(req.query.fecha2);
        const items = await controlador.empleadosfechas(req.query.fecha1,req.query.fecha2);
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
};
/**********************************************************************/
async function Consulta(req, res, next){
    console.log(req.query.genero);
    console.log(req.query.modalidad);
    console.log(req.query.rol_trabajo);
    try {
        const items = await controlador.empleadosConsulta(req.query.genero, req.query.modalidad, req.query.rol_trabajo);
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
};
/**********************************************************************/

async function unEmpleado(req, res, next){
    try {
        const items = await controlador.unEmpleado(req.params.id);
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
};

async function insertarEmplead(req, res, next){
    try {
        const items = await controlador.insertarEmpleado(req.body);
        if (req.body.id_empleado == 0) {
            mensaje = 'Empleado guardado con exito'
        }else{
            mensaje = 'Empleado actualizado con exitooooo'
        }
        respuesta.success(req, res, mensaje, 201);
    } catch (err) {
        next(err)
    }
};


async function eliminar(req, res, next){
    try {
        const items = await controlador.eliminar(req.params.id);
        respuesta.success(req, res, 'Empleado eliminado satisfactoriamente', 200);
    } catch (err) {
        next(err)
    }
};



module.exports = routerEmpleados