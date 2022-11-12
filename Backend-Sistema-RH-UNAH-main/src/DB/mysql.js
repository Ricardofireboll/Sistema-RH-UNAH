const mysql = require('mysql')
const config = require('../config');
const { error } = require('../helpers/respuestas');

const dbConfig = {
    host: config.mysql.server,
    database:config.mysql.dababase,
    user: config.mysql.user,
    password: config.mysql.password
}
let DataBase;

function conexionMysql() {
    DataBase = mysql.createConnection(dbConfig);
    DataBase.connect((err) => {
        if (err) {
            console.log('[db error]', err);
            setTimeout(conexionMysql, 200);
        }else{
            console.log('Base de Datos conectada <3');
            
        }
    });

    DataBase.on('error', err =>{
        console.log('[db error]', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            conexionMysql();
        }else{
            throw err;
        }
    });
}

conexionMysql();


module.exports ={
    DataBase,
}