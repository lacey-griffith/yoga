const router = require('express').Router();
const sequelize = require('../config/connection');
//const isLoggedIn = require('../utils/auth')
const {User, Pose, TargetGroup, Comment} = require('../models');


router.get('/', (req, res) => {
    TargetGroup.findAll({
        }).then(targetData => {

        const target = targetData.map(target => target.get({ plain: true }))
            console.log(target)
        res.render('dashboard', { target })
        
    
    }).catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
});

router.get('/api/target_groups', (req, res) => {
    TargetGroup.findAll({
        where: {
            //req.params.id? unsure on this query
            id: req.params.id
        },
        include: {
            model: Pose,
            attributes: ['pose_name', 'difficulty', 'target_group']
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