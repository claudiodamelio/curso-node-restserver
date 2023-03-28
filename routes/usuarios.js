const {Router} = require('express');
const {usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPath} = require('../controllers/usuarios');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');
const {esRolValido, emailExiste, existeUsuarioPorId} = require('../helpers/db-validators');

const router = Router();

router.get('/', usuariosGet);

router.put('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(esRolValido),
    validarCampos
], usuariosPut);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe tener mas 6 o mas letras').isLength({min: 6}),
    check('correo', 'El correo no es valido').isEmail(),
    check('correo').custom(emailExiste),
    check('rol').custom(esRolValido),
    validarCampos
], usuariosPost);

router.patch('/', usuariosPath);

router.delete('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
], usuariosDelete);

module.exports = router;