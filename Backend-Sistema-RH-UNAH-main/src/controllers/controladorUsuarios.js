const dataBase = require('../model/ModelUsuarios');
const bcrypt = require('bcrypt');

const auth = require('../auth/token');

function traerUsuarios() {
    return dataBase.traerUsuarios();
}

function unUsuarios(id) {
    return dataBase.unUsuarios(id);
}

function eliminarUsuario(id) {
    return dataBase.eliminarUsuario(id);
}

async function agregarUsuario(body) {
    body.Password = await bcrypt.hash(body.Password.toString(),5) 
    return dataBase.agregarUsuario( body);
}


async function login(email, password) {
    const data = await dataBase.login({Email:email});
    if (data) {
        return bcrypt.compare(password, data.Password)
        .then(resultado =>{
            if (resultado === true) {
                //Generar un token
                var info={
                    user:data,
                    token: auth.asignarToken({...data})
                }
                return info;
            }
        })
    }
}

module.exports ={
    traerUsuarios,
    unUsuarios,
    eliminarUsuario,
    agregarUsuario,
    login
}