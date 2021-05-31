const router = require('express').Router();
const passport = require('passport')

const apiRoutes = require('./api');
const loginRoute = require('./home-routes')
const dashboardRoutes = require('./dashboard-routes')


router.use(passport.initialize());
router.use(passport.session());
router.use('/api', apiRoutes);
router.use('/', loginRoute)
router.use('/dashboard', dashboardRoutes)


module.exports = router;