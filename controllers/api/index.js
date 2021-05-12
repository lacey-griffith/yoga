const router = require('express').Router();

const yogaRoutes = require('./yogaRoutes.js');


router.use('/', yogaRoutes);


module.exports = router;