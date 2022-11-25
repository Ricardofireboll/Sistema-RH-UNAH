const express = require("express");
const respuesta = require('../helpers/respuestas');

const routerAsistencia = express.Router();

const controladorr = require("../controllers/controladorCSV");
const controlador = require("../controllers/controladorAsistencia");

routerAsistencia.post(
    "/",
    controladorr.upload,
    controladorr.uploadFile
);

//obtener totakl de asistencias
routerAsistencia.get('/', totalAsistencias);
//obtener totakl de asistencias puntuales
routerAsistencia.get('/puntuales', totalAsistenciasPuntuales);
//obtener totakl de asistencias inpuntuales
routerAsistencia.get('/inpuntuales', totalAsistenciasInpuntuales);
//obtener totakl de asistencias injustificadas
routerAsistencia.get('/injustificadas', totalAsistenciasInjustificadas);
//Obtener un empleado asistencia
routerAsistencia.get('/Empleado/:id', traerEmpleadoAsistencia);

routerAsistencia.get('/asistenciaPersonal/:id', asistenciaEmpleado);

async function traerEmpleadoAsistencia(req, res, next){
    try {
        const items = await controlador.traerEmpleadoAsistencia(req.params.id);
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
};

async function asistenciaEmpleado(req, res, next){
    try {
        const items = await controlador.asistenciaEmpleado(req.params.id);
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
}; 

async function totalAsistencias(req, res, next){
    try {
        const items = await controlador.totalRegistros();
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
};

async function totalAsistenciasPuntuales(req, res, next){
    try {
        const items = await controlador.totalPuntuales();
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
};

async function totalAsistenciasInpuntuales(req, res, next){
    try {
        const items = await controlador.totalInpuntuales();
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
};

async function totalAsistenciasInjustificadas(req, res, next){
    try {
        const items = await controlador.totalInjustificadas();
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
};

module.exports = routerAsistencia