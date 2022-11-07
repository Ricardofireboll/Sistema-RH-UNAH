const {DataBase} = require('../DB/mysql.js');

function traerEmpleados() {
    return new Promise((resolve, reject) =>{
        DataBase.query(`SELECT * FROM empleados`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function traerEmpleado(id) {
    return new Promise((resolve, reject) =>{
        DataBase.query(`SELECT * FROM empleados WHERE ID_Empleado=${id}`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function agregarEmpleado(data) {
    return new Promise((resolve, reject) =>{
        DataBase.query(`INSERT INTO empleados SET ? ON DUPLICATE KEY UPDATE ?`,[data,data], (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function eliminarEmpleado(id) {
    return new Promise((resolve, reject) =>{
        DataBase.query(`DELETE FROM empleados WHERE ID_Empleado=${id}`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function traerEmpleadosFechas(fecha1, fecha2) {
    return new Promise((resolve, reject) =>{
        DataBase.query(`SELECT * FROM empleados WHERE fecha_ingreso BETWEEN '${fecha1}' AND '${fecha2}'`, (error, result) =>{
            
            return error ? reject(error) : resolve(result);
        });
    });
}

function traerEmpleadosParemetros(genero, modalidad, rol_trabajo) {
    return new Promise((resolve, reject) =>{
        DataBase.query(`SELECT * FROM empleados WHERE genero='${genero}' AND modalidad='${modalidad}' AND rol_trabajo='${rol_trabajo}'`, (error, result) =>{
            
            return error ? reject(error) : resolve(result);
        });
    });
}

module.exports ={
    traerEmpleados,
    traerEmpleado,
    agregarEmpleado,
    eliminarEmpleado,
    traerEmpleadosFechas,
    traerEmpleadosParemetros
}