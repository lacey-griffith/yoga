const router = require('express').Router();

const poseRoutes = require('./poses-routes');
const userRoutes = require('./user-routes')

router.use('/poses', poseRoutes);
router.use('/users', userRoutes);

module.exports = router;

