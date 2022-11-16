const { Router } = require('express');
const router = Router(); //Obtener la función Router

//consultar datos
/*router.get('/', (req, res) => {
    console.log(); ('GET API');
    res.json({
        msg: 'GET API'
    });
});*/


//consultar datos
router.get('/', (req, res) => {
    const{referencia, nombre} = req.query
    res.json({
        msg:'GET APII',
        referencia, 
        nombre
    });
});

//enviar datos
router.post('/', (req, res) => {
    res.json({
        msg: 'POST API'
    });
});

//modificar datos
router.put('/', (req, res) => {
    res.json({
        msg: 'PUT API'
    });
});

//borra datos
router.delete('/', (req, res) => {
    res.json({
        msg: 'DELETE API'
    });
});

//enviar datos
router.post('/', (req, res) => {
    res.json({
        msg: 'PATCH API'
    });
});

//exportar modulo para usar en otro sitio
module.exports = router;
