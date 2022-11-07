const express = require('express');

const respuesta = require('../helpers/respuestas');
const controlador = require('../controllers/controladorUsuarios');
const seguridad = require('../auth/seguridad');

const routerUsuarios = express.Router();


//obtener todos los Usuarios
routerUsuarios.get('/', /*seguridad(),*/ traerUsuarios);
//Obtener un Usuario
routerUsuarios.get('/:id', unUsuarios);
//Eliminar un Usuario 
routerUsuarios.delete('/:id', eliminarUsuario);
//Crear un Usuario
routerUsuarios.post('/', agregarUsuario);
//login
routerUsuarios.post('/login', login);


async function traerUsuarios(req, res, next){
    try {
        const items = await controlador.traerUsuarios();
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
};

async function unUsuarios(req, res, next){
    try {
        const items = await controlador.unUsuarios(req.params.id);
        respuesta.success(req, res, items, 200);
    } catch (err) {
        next(err)
    }
};
async function eliminarUsuario(req, res, next){
    try {
        const items = await controlador.eliminarUsuario(req.params.id);
        respuesta.success(req, res, 'Empleado eliminado satisfactoriamente', 200);
    } catch (err) {
        next(err)
    }
};
async function agregarUsuario(req, res, next){
    try {
        const items = await controlador.agregarUsuario(req.body);
        if (req.body.ID_Usuario == 0) {
            mensaje = 'Usuario guardado con exito'
        }else{
            mensaje = 'Usuario actualizado con exito'
        }
        respuesta.success(req, res, mensaje, 201);
    } catch (err) {
        next(err)
    }
};

async function login(req, res, next) {
    try {
        const token = await controlador.login(req.body.Email, req.body.Password);
        var data 
        if (token) {
            data = {
                    datos:token,
                    validacion:'Usuario y contraseña verificada',
                    
            }
        }else{
            data= {validacion:'Usuario y contraseña invalidos'}
        }
        respuesta.success(req, res, data, 200);
    } catch (err) {
        next(err);
    }
}

routerUsuarios.get('/holis', (req, res) => {
    res.send('💻.');
});

module.exports = routerUsuarios