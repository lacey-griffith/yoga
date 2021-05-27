const router = require('express').Router();
const sequelize = require('../config/connection');
//const isLoggedIn = require('../utils/auth')
const {User} = require('../models');


router.get('/', (req, res) => {
    if(req.session.loggedIn){
        res.redirect('/dashboard')
        return
    }
    res.render('login')
});
router.get('/home', (req, res) => {
    res.render('home')
});
module.exports = router;