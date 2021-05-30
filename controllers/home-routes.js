const router = require('express').Router();
const sequelize = require('../config/connection');
//const isLoggedIn = require('../utils/auth')
const {User} = require('../models');


router.get('/', (req, res) => {
    console.log(req.session)
    if(req.session.loggedIn){
        res.redirect('/dashboard')
        return
    }
    res.render('login')
});
module.exports = router;