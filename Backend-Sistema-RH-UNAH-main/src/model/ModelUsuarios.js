const {DataBase} = require('../DB/mysql.js');
const bcrypt = require('bcrypt');
const auth = require('../auth/token');


function traerUsuarios() {
    return new Promise((resolve, reject) =>{
        DataBase.query(`SELECT * FROM USUARIOS`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function unUsuarios(id) {
    return new Promise((resolve, reject) =>{
        DataBase.query(`SELECT * FROM USUARIOS WHERE ID_Usuario=${id}`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function agregarUsuario(data) {
    return new Promise((resolve, reject) =>{
        DataBase.query(`INSERT INTO USUARIOS SET ? ON DUPLICATE KEY UPDATE ?`,[data,data], (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function eliminarUsuario(id) {
    return new Promise((resolve, reject) =>{
        DataBase.query(`DELETE FROM USUARIOS WHERE ID_Usuario=${id}`, (error, result) =>{
            return error ? reject(error) : resolve(result);
        });
    });
}

function login(consulta) {
    return new Promise((resolve, reject) =>{
        DataBase.query(`SELECT * FROM USUARIOS WHERE ?`,consulta, (error, result) =>{
            return error ? reject(error) : resolve(result[0]);
        });
    });
}

module.exports ={
    traerUsuarios,
    unUsuarios,
    agregarUsuario,
    eliminarUsuario,
    login
}