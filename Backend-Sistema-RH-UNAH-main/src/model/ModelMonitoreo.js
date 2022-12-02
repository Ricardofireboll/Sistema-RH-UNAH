const {DataBase} = require('../DB/mysql.js');

function obtenerMonitoreo(edificio) {
    return new Promise((resolve, reject) =>{
        DataBase.query(` SELECT id_monitoreo, aula, nombre_asignatura, seccion, hora_inicio,Asignatura_Periodo.id_asignatura,
        Asignatura_Periodo.id_docente,Asignatura_Periodo.id_edificio,nombre_edificio,
        concat(primer_nombre," ",segundo_nombre," ",primer_apeliido," ",segundo_apellido) AS nombre_docente,
        hora,fecha,id_monitoreo,estado
        FROM Monitoreo 
        INNER JOIN Asignatura_Periodo
        ON Monitoreo.id_asign_periodo=Asignatura_Periodo.id_asign_periodo
        INNER JOIN empleados 
        ON empleados.id_empleado=Asignatura_Periodo.id_docente
        INNER JOIN Asignatura 
        ON Asignatura.id_asignatura=Asignatura_Periodo.id_asignatura
        INNER JOIN edificios_unah
        ON edificios_unah.id_edificios=Asignatura_Periodo.id_edificio
        WHERE Monitoreo.estado IS NULL && hora IS NULL && nombre_edificio="${edificio}";`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
} 


function obtenerMonitoreoPendiente() {
    return new Promise((resolve, reject) =>{
        DataBase.query(`SELECT nombre_edificio,Asignatura_Periodo.id_edificio,COUNT(nombre_edificio) as pendientes
        FROM Monitoreo 
        INNER JOIN Asignatura_Periodo
        ON Monitoreo.id_asign_periodo=Asignatura_Periodo.id_asign_periodo
        INNER JOIN empleados 
        ON empleados.id_empleado=Asignatura_Periodo.id_docente
        INNER JOIN Asignatura 
        ON Asignatura.id_asignatura=Asignatura_Periodo.id_asignatura
        INNER JOIN edificios_unah
        ON edificios_unah.id_edificios=Asignatura_Periodo.id_edificio
        WHERE Monitoreo.estado IS NULL && hora IS NULL 
        GROUP BY nombre_edificio
        ORDER BY nombre_edificio;`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
} 

function actualizarEstado(id, estado, hora) {
    return new Promise((resolve, reject) =>{
        DataBase.query(`UPDATE Monitoreo SET estado = '${estado}', hora = '${hora}' WHERE id_monitoreo=${id};`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
} 


module.exports ={
    obtenerMonitoreo,
    obtenerMonitoreoPendiente,
    actualizarEstado
}