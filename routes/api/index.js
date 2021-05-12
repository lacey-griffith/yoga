const router = require('express').Router();

const poseRoutes = require('./poses-routes.js');

router.use('/poses', poseRoutes);

module.exports = router;