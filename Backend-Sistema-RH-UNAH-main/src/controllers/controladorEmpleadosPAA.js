const dataBase = require('../model/ModelPAA');

function traerEmpleadosPAA() {
    return dataBase.trearEmpleadosPAA();
}

function traerEmpleadoPAA(id) {
    return dataBase.trearEmpleadoPAA(id);
}

module.exports ={
    traerEmpleadosPAA,
    traerEmpleadoPAA
}