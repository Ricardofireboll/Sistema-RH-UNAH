const dataBase = require('../model/ModelMonitoreo');

function obtenerMonitoreo(edificio) {
    return dataBase.obtenerMonitoreo(edificio);
}

function obtenerMonitoreoPendiente() {
    return dataBase.obtenerMonitoreoPendiente();
}

function actualizarEstado(id, estado, hora) {
    return dataBase.actualizarEstado(id, estado, hora);
}

module.exports ={
    obtenerMonitoreo,
    obtenerMonitoreoPendiente,
    actualizarEstado
}