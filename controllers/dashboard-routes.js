const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth')
const {User, Pose, TargetGroup, Comment} = require('../models');


router.get('/', withAuth, (req, res) => {
    TargetGroup.findAll({
        attributes: ['id','target_group'],
        include: {
            model: Pose,
            attributes: ['id','pose_name','difficulty','target_group_id']
        }

    }).then(targetData => {
        const target = targetData.map(target => target.get({ plain: true }))
        res.render('dashboard', { target })
    
    }).catch(err => {
            res.status(500).json(err);
          });
});



module.exports = router;