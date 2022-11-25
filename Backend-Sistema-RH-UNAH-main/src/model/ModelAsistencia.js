const {DataBase} = require('../DB/mysql.js');


function traerEmpleadoAsistencia(id) {
    return new Promise((resolve, reject) =>{
        DataBase.query(`SELECT * FROM asistencia INNER JOIN empleados 
        ON asistencia.id_empleado = empleados.id_empleado WHERE empleados.id_empleado =${id};`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function asistenciaEmpleado(id) {
    return new Promise((resolve, reject) =>{
        DataBase.query(`select concat(primer_nombre," ",segundo_nombre," ",primer_apeliido," ",segundo_apellido) as Nombre, 
                        asistencia.id,fecha,hora_marcada, llegada,asistencia.id_empleado,nombre_puesto
                        from asistencia inner join empleados
                        on asistencia.id_empleado=empleados.id_empleado
                        inner join puestos_empleado on
                        empleados.id_puesto=puestos_empleado.id_puesto
                        where asistencia.id_empleado=${id}`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
} 

function totalAsistencias() {
    return new Promise((resolve, reject) =>{
        DataBase.query(`SELECT COUNT(id) AS Total FROM asistencia;`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function totalPuntuales() {
    return new Promise((resolve, reject) =>{
        DataBase.query(`SELECT COUNT(id) AS Total_puntuales FROM asistencia Where llegada = 'Puntual';`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function totalInpuntuales() {
    return new Promise((resolve, reject) =>{
        DataBase.query(`SELECT COUNT(id) AS Total_inpuntuales FROM asistencia Where llegada = 'Llego tarde';`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function totalInjustificadas() {
    return new Promise((resolve, reject) =>{
        DataBase.query(`SELECT COUNT(id) AS Total_injustificadas FROM asistencia Where llegada = 'No llego';`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}





module.exports ={
    traerEmpleadoAsistencia,
    asistenciaEmpleado,
    totalAsistencias,
    totalPuntuales,
    totalInpuntuales,
    totalInjustificadas
}