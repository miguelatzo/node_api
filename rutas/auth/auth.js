let auth   = require('../../auth/auth');
let router = require('../route-object');

router.route('/otorgar-token')
    .post(auth.otorgarToken);

module.exports = router;