const router = require('express').Router();
const passport = require('passport')
const session = require('express-session')
const apiRoutes = require('./api');
const loginRoute = require('./home-routes')

router.use(session({ secret: "namaste a while", resave: true, saveUninitialized: true }))
router.use(passport.initialize());
router.use(passport.session());
router.use('/api', apiRoutes);
router.use('/', loginRoute);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;