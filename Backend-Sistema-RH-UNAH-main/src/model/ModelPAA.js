const {conexion} = require('../DB/mysql.js');
const respuesta = require('../helpers/respuestas');



function empleadosPAA() {
    return new Promise((resolve, reject) =>{
        conexion.query(`SELECT * FROM PAA  INNER JOIN EMPLEADOS 
        ON PAA.id_empleado = EMPLEADOS.id_empleado`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function empleados() {
    return new Promise((resolve, reject) =>{
        conexion.query(`SELECT * FROM EMPLEADOS`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function empleadosFechas(fecha1, fecha2) {
    return new Promise((resolve, reject) =>{
        conexion.query(`SELECT * FROM EMPLEADOS WHERE fecha_ingreso BETWEEN '${fecha1}' AND '${fecha2}'`, (error, result) =>{
            result.fecha_ingreso ="0"
            return error ? reject(error) : resolve(result);
        });
    });
}
/**********************************************************************/
function empleadosConsulta(genero, modalidad, rol_trabajo) {
    return new Promise((resolve, reject) =>{
        conexion.query(`SELECT * FROM EMPLEADOS WHERE genero='${genero}' AND modalidad='${modalidad}' AND rol_trabajo='${rol_trabajo}'`, (error, result) =>{
            
            return error ? reject(error) : resolve(result);
        });
    });
}
/**********************************************************************/

function unEmpleado(TABLA,id) {
    return new Promise((resolve, reject) =>{
        conexion.query(`SELECT * FROM ${TABLA} WHERE ID_Empleado=${id}`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function insertarEmpleado(TABLA, data) {
    return new Promise((resolve, reject) =>{
        conexion.query(`INSERT INTO ${TABLA} SET ? ON DUPLICATE KEY UPDATE ?`,[data,data], (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function insertarEmpleadoPAA(TABLA, data) {
    return new Promise((resolve, reject) =>{
        conexion.query(`INSERT INTO PAA SET ? ON DUPLICATE KEY UPDATE ?`,[data,data], (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function insertarDescripcionPAA(TABLA, data) {
    return new Promise((resolve, reject) =>{
        conexion.query(`INSERT INTO DESCRIPCION SET ? ON DUPLICATE KEY UPDATE ?`,[data,data], (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function eliminarEmpleado(TABLA, id) {
    return new Promise((resolve, reject) =>{
        conexion.query(`DELETE FROM ${TABLA} WHERE ID_Empleado=${id}`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}



module.exports ={
    empleadosPAA,
    empleados,
    empleadosFechas,
    /**********************************************************************/
    empleadosConsulta,
    /**********************************************************************/
    unEmpleado,
    insertarEmpleado,
    insertarEmpleadoPAA,
    insertarDescripcionPAA,
    eliminarEmpleado,
}