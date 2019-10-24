let operaciones = require('../../operaciones/operaciones');
let router      = require('../route-object');

// router.route('/suma')
//     .post(operaciones.postSuma);

router.route('/suma')
    .get(operaciones.getSuma);
router.route('/suma/:elementos')
    .get(operaciones.getSuma);
router.route('/multiplicacion/')
    .get(operaciones.getMultiplicacion);
router.route('/multiplicacion/:elementos')
    .get(operaciones.getMultiplicacion);
router.route('/raices/')
    .get(operaciones.getFormulaCuadratica);
router.route('/raices/:elementos')
    .get(operaciones.getFormulaCuadratica);

module.exports = router;