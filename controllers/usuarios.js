const {response} = require('express');

const usuariosGet = (req = request, res = response) => {
    const {a, b = 'Sin B', c} = req.query;
    res.json({
        msg: 'get API - Controlador',
        a,
        b,
        c
    });
}

const usuariosPost = (req = request, res = response) => {
    const {nombre, edad} = req.body;

    res.json({
        msg: 'post API - Controlador',
        nombre,
        edad
    });
}

const usuariosPut = (req = request, res = response) => {
    const id = req.params.id;

    res.json({
        msg: 'put API - Controlador',
        id
    });
}

const usuariosPath = (req = request, res = response) => {
    res.json({
        msg: 'patch API - Controlador'
    });
}

const usuariosDelete = (req = request, res = response) => {
    res.json({
        msg: 'delete API - Controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPath,
    usuariosDelete
}