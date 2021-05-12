const router = require('express').Router();

const yogaRoutes = require('./yogaRoutes.js');


router.use('/poses', yogaRoutes);


module.exports = router;