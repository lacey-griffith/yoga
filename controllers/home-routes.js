const router = require('express').Router();
const sequelize = require('../config/connection');
const isLoggedIn = require('../utils/auth')
const {User} = require('../models');


router.get('/', (req, res) => {
    // console.log('=============')
    // console.log(req.session, 'home-route')
    // console.log('=============')
    // if (req.session.loggedIn) {
    //     res.redirect('/dashboard');
    //     return;
    //   }
    res.render('login')
});


module.exports = router;