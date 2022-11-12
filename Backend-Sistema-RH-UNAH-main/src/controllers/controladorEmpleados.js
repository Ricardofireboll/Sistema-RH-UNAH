const dataBase = require('../model/ModelEmpleados');

function traerEmpleados() {
    return dataBase.traerEmpleados();
}

function traerEmpleado(id) {
    return dataBase.traerEmpleado(id);
}

async function agregarEmpleado(body) {
    return dataBase.agregarEmpleado(body);
}

function eliminarEmpleado(id) {
    return dataBase.eliminarEmpleado(id);
}

function traerEmpleadosFechas(fecha1, fecha2) {
    return dataBase.traerEmpleadosFechas(fecha1, fecha2);
}

function traerEmpleadosParemetros(genero, modalidad, rol_trabajo) {
    return dataBase.traerEmpleadosParemetros(genero, modalidad, rol_trabajo);
}

module.exports ={
    traerEmpleados,
    traerEmpleado,
    agregarEmpleado,
    eliminarEmpleado,
    traerEmpleadosFechas,
    traerEmpleadosParemetros,
}