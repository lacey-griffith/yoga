const router = require('express').Router();
const sequelize = require('../config/connection');
//const isLoggedIn = require('../utils/auth')
const {User, Pose, TargetGroup, Comment} = require('../models');


router.get('/', (req, res) => {
    TargetGroup.findAll({
        }).then(targetData => {

        const target = targetData.map(target => target.get({ plain: true }))
        res.render('dashboard', { target })
        
    
    }).catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
});

router.get('/target_groups', (req, res) => {
    TargetGroup.findAll({
        where: {
            //req.params.id? unsure on this query
            target_group: req.params.target_group
        },
        include: {
            model: Pose,
            attributes: ['pose_name', 'difficulty']
        }
        })
        .then(searchResults => {
            console.log(searchResults)
            //const searchRes = searchResults.map(result => result.get({ plain: true}))
            //res.render()
        })
        .catch(err => res.status(500).json(err))
});


module.exports = router;