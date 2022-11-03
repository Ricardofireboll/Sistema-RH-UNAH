const dataBase = require('../model/ModelPAA');
const respuesta = require('../helpers/respuestas');

const TABLA = 'EMPLEADOS'

function empleados() {
    return dataBase.empleados();
}
function empleadosfechas(fecha1, fecha2) {
    
    return dataBase.empleadosFechas(fecha1, fecha2);
}

function empleadosfechas(fecha1, fecha2) {
    
    return dataBase.empleadosFechas(fecha1, fecha2);
}
/**********************************************************************/
function empleadosConsulta(genero, modalidad, rol_trabajo) {
    
    return dataBase.empleadosConsulta(genero, modalidad, rol_trabajo);
}
/**********************************************************************/


function empleadosPAA() {
    return dataBase.empleadosPAA(TABLA);
}

function unEmpleado(id) {
    return dataBase.unEmpleado(TABLA, id);
}

async function insertarEmpleado(body) {
    return dataBase.insertarEmpleado(TABLA, body);
}

async function insertarEmpleadoPAA(body) {
    return dataBase.insertarEmpleadoPAA(TABLA, body);
}

async function insertarDescripcionPAA(body) {
    return dataBase.insertarDescripcionPAA(TABLA, body);
}


function eliminar(id) {
    return dataBase.eliminarEmpleado(TABLA, id);
}

module.exports ={
    eliminar,
    empleados,
    empleadosfechas,
    /**********************************************************************/
    empleadosConsulta,
    /**********************************************************************/
    empleadosPAA,
    insertarEmpleadoPAA,
    insertarEmpleado,
    insertarDescripcionPAA,
    unEmpleado
}