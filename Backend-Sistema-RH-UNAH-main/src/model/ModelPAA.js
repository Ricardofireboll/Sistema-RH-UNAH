const {DataBase} = require('../DB/mysql.js');

function trearEmpleadosPAA() {
    return new Promise((resolve, reject) =>{
        DataBase.query(`SELECT * FROM empleados_paa INNER JOIN paa 
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

function trearEmpleadoPAA(id) {
    return new Promise((resolve, reject) =>{
        DataBase.query(`SELECT * FROM empleados_paa INNER JOIN paa 
        on paa.id_paa=empleados_paa.id_paa
        INNER JOIN rol_empleado_paa ON
        paa.id_roll_empleado_paa=rol_empleado_paa.id_roll_empleado_paa
        INNER JOIN tipo_paa ON
        paa.id_tipo_paa=tipo_paa.id_tipo_paa
        INNER JOIN empleados ON
        empleados.id_empleado=empleados_paa.id_empleado WHERE paa.id_paa=${id};`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

module.exports ={
    trearEmpleadosPAA,
    trearEmpleadoPAA
}