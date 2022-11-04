const {conexion} = require('../DB/mysql.js');
const respuesta = require('../helpers/respuestas');



function empleadosPAA() {
    return new Promise((resolve, reject) =>{
        conexion.query(`SELECT * FROM empleados_paa INNER JOIN paa 
        on paa.id_paa=empleados_paa.id_paa
        INNER JOIN rol_empleado_paa ON
        paa.id_roll_empleado_paa=rol_empleado_paa.id_roll_empleado_paa
        INNER JOIN tipo_paa ON
        paa.id_tipo_paa=tipo_paa.id_tipo_paa
        INNER JOIN empleados ON
        empleados.id_empleado=empleados_paa.id_empleado;`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function empleados() {
    return new Promise((resolve, reject) =>{
        conexion.query(`SELECT * FROM empleados`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function empleadosFechas(fecha1, fecha2) {
    return new Promise((resolve, reject) =>{
        conexion.query(`SELECT * FROM empleados WHERE fecha_ingreso BETWEEN '${fecha1}' AND '${fecha2}'`, (error, result) =>{
            
            return error ? reject(error) : resolve(result);
        });
    });
}
/**********************************************************************/
function empleadosConsulta(genero, modalidad, rol_trabajo) {
    return new Promise((resolve, reject) =>{
        conexion.query(`SELECT * FROM empleados WHERE genero='${genero}' AND modalidad='${modalidad}' AND rol_trabajo='${rol_trabajo}'`, (error, result) =>{
            
            return error ? reject(error) : resolve(result);
        });
    });
}
/**********************************************************************/

function unEmpleado(TABLA,id) {
    return new Promise((resolve, reject) =>{
        conexion.query(`SELECT * FROM empleados WHERE id_empleado=${id}`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function insertarEmpleado(TABLA, data) {
    return new Promise((resolve, reject) =>{
        conexion.query(`INSERT INTO empleados SET ? ON DUPLICATE KEY UPDATE ?`,[data,data], (error, result) =>{
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
        conexion.query(`DELETE FROM empleados WHERE id_empleado=${id}`, (error, result) =>{
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