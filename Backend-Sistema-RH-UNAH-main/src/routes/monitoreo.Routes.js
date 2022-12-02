const express = require('express');

const respuesta = require('../helpers/respuestas');
const controlador = require('../controllers/controladorMonitoreo');
const seguridad = require('../auth/seguridad');

const routerMonitoreo = express.Router();

//Obtener Monitoreo por edificio
routerMonitoreo.get('/Edificio/:edificio', obtenerMonitoreo);
//Obtener Monitoreo Pendiente
routerMonitoreo.get('/Pendientes/', obtenerMonitoreoPendiente);
//Actualizar Estado
routerMonitoreo.put('/Estado/', actualizarEstado);


async function obtenerMonitoreo(req, res, next){
    try {
        const items = await controlador.obtenerMonitoreo(req.params.edificio);
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
};

async function obtenerMonitoreoPendiente(req, res, next){
    try {
        const items = await controlador.obtenerMonitoreoPendiente();
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
};

async function actualizarEstado(req, res, next){
    console.log(req.query.id);
    console.log(req.query.estado);
    console.log(req.query.hora);
    try {
        const items = await controlador.actualizarEstado(req.query.id, req.query.estado, req.query.hora);
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
};


module.exports = routerMonitoreo