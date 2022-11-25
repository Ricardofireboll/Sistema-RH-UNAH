const dataBase = require('../model/ModelAsistencia');


function traerEmpleadoAsistencia(id) {
  return dataBase.traerEmpleadoAsistencia(id);
}

function asistenciaEmpleado(id){
  return dataBase.asistenciaEmpleado(id)
}

function totalRegistros() {
  return dataBase.totalAsistencias();
}

function totalPuntuales() {
  return dataBase.totalPuntuales();
}

function totalInpuntuales() {
  return dataBase.totalInpuntuales();
}

function totalInjustificadas() {
  return dataBase.totalInjustificadas();
}
module.exports ={
  traerEmpleadoAsistencia,
  asistenciaEmpleado,
  totalRegistros,
  totalPuntuales,
  totalInpuntuales,
  totalInjustificadas
}