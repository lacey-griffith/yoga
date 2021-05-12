const router = require('express').Router();
const yogaRoutes = require('./api/yogaRoutes');

router.use(yogaRoutes);

module.exports = router;