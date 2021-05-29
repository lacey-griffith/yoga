const router = require('express').Router();
const sequelize = require('../config/connection');
//const isLoggedIn = require('../utils/auth')
const {User, Pose, TargetGroup, Comment} = require('../models');


router.get('/', (req, res) => {
    TargetGroup.findAll({
        attributes: ['id','target_group'],
        include: {
            model: Pose,
            attributes: ['id','pose_name','difficulty','target_group_id']
        }

    }).then(targetData => {
        const target = targetData.map(target => target.get({ plain: true }))
        const length = target[0].poses.length
        console.log('====dashboard-routes====')
        console.log(target[0])
        console.log(length)
        console.log('====dashboard-routes====')
        res.render('dashboard', { target })
    
    }).catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
});

router.get('/:id', (req,res) => {
    TargetGroup.findAll({
        where: {
            id: req.params.id
        },
        attributes: ['id','target_group'],
        include: {
            model: Pose,
            attributes: ['id','pose_name','difficulty','target_group_id']
        }
}).then(targetData => {
    const poseInfo = targetData.map(poseInfo => poseInfo.get({ plain: true }))
    for (let i = 0; i < poseInfo.length; i++) {
        res.render('dashboard', poseInfo[i])
        
    }
    }).catch(err => res.status(500).json(err))
});


module.exports = router;