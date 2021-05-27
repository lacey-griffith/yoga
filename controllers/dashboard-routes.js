const router = require('express').Router();
const sequelize = require('../config/connection');
//const isLoggedIn = require('../utils/auth')
const {User, Pose, TargetGroup, Comment} = require('../models');


router.get('/', (req, res) => {
    TargetGroup.findAll({
        }).then(targetData => {

        const target = targetData.map(target => target.get({ plain: true }))
            console.log(target)
        res.render('dashboard',  target )
        
    
    }).catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
});

module.exports = router;