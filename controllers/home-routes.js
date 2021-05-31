const router = require('express').Router();
const sequelize = require('../config/connection');
const isLoggedIn = require('../utils/auth')
const {User} = require('../models');


router.get('/', (req, res) => {
    res.render('login')
});


module.exports = router;