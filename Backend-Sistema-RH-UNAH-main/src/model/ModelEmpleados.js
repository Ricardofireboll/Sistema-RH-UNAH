const {conexion} = require('../DB/mysql.js');
const respuesta = require('../helpers/respuestas');



function empleadosPAA() {
    return new Promise((resolve, reject) =>{
        conexion.query(`SELECT paa.id_paa,empleados_paa.id_empleado,fecha_aplicacion,dias_participacion,dias_aprobados,nombre_rol,nombre_tipo,
CONCAT(primer_nombre," ",segundo_nombre," ",primer_apeliido," ",segundo_apellido) as nombre_completo
FROM empleados_paa INNER JOIN paa 
on paa.id_paa=empleados_paa.id_paa
INNER JOIN rol_empleado_paa ON
paa.id_roll_empleado_paa=rol_empleado_paa.id_roll_empleado_paa
INNER JOIN tipo_paa ON
paa.id_tipo_paa=tipo_paa.id_tipo_paa
INNER JOIN empleados ON
empleados.id_empleado=empleados_paa.id_empleado`, (error, result) =>{
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
    unEmpleado,
    insertarEmpleado,
    insertarEmpleadoPAA,
    insertarDescripcionPAA,
    eliminarEmpleado,
}