const router = require('express').Router();

const poseRoutes = require('./poses-routes');
const userRoutes = require('./user-routes');
const targetRoutes = require('./target-group-routes');
const commentRoutes = require('./comment-routes')

router.use('/poses', poseRoutes);
router.use('/users', userRoutes);
router.use('/targetgroups', targetRoutes);
router.use('/comments', commentRoutes)

module.exports = router;

