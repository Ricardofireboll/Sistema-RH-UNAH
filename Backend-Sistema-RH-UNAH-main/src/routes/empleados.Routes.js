const express = require('express');

const respuesta = require('../helpers/respuestas');
const controlador = require('../controllers/controladorEmpleados');
const seguridad = require('../auth/seguridad');

const routerEmpleados = express.Router();


//obtener todos los empleados
routerEmpleados.get('/', /*seguridad(),*/ traerEmpleados);
//Obtener un empleado
routerEmpleados.get('/Empleado/:id', traerEmpleado);
//Crear un empleado
routerEmpleados.post('/new', agregarEmpleado);
//Eliminar un empleado
routerEmpleados.delete('/:id', eliminarEmpleado);
//traer empleados por fechas
routerEmpleados.get('/fechas', traerEmpleadosFechas);
/**********************************************************************/
//traer empleados por consultas
routerEmpleados.get('/consulta', traerEmpleadosParemetros);
/**********************************************************************/


async function traerEmpleados(req, res, next){
    try {
        const items = await controlador.traerEmpleados();
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
};

async function traerEmpleado(req, res, next){
    try {
        const items = await controlador.traerEmpleado(req.params.id);
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
};

async function agregarEmpleado(req, res, next){
    console.log(req.body)
    try {
        const items = await controlador.agregarEmpleado(req.body);
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
async function eliminarEmpleado(req, res, next){
    try {
        const items = await controlador.eliminarEmpleado(req.params.id);
        respuesta.success(req, res, 'Empleado eliminado satisfactoriamente', 200);
    } catch (err) {
        next(err)
    }
};

async function traerEmpleadosFechas(req, res, next){
    try {
        console.log(req.query.fecha1);
        console.log(req.query.fecha2);
        const items = await controlador.traerEmpleadosFechas(req.query.fecha1,req.query.fecha2);
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
};

async function traerEmpleadosParemetros(req, res, next){
    console.log(req.query.genero);
    console.log(req.query.modalidad);
    console.log(req.query.rol_trabajo);
    try {
        const items = await controlador.traerEmpleadosParemetros(req.query.genero, req.query.modalidad, req.query.rol_trabajo);
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
};

module.exports = routerEmpleados