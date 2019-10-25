let auth   = require('../../auth/auth');
let router = require('../route-object');

router.route('/token')
    .post(auth.otorgarToken);

module.exports = router;