const router = require('express').Router();
const sequelize = require('../config/connection');
//const isLoggedIn = require('../utils/auth')
const {User, Pose, TargetGroup, Comment} = require('../models');


// router.get('/', (req, res) => {
//     TargetGroup.findAll({
//         }).then(targetData => {
//         const target = targetData.map(target => target.get({ plain: true }))
//         res.render('dashboard', { target })
    
//     }).catch(err => {
//             console.log(err);
//             res.status(500).json(err);
//           });
// });

router.get('/', (req, res) => {
    TargetGroup.findAll({
        attributes: ['id','target_group'],
        include: {
            model: Pose,
            attributes: ['id','pose_name','difficulty','target_group_id']
        }

    }).then(targetData => {
        const target = targetData.map(target => target.get({ plain: true }))
        console.log('====dashboard-routes====')
        console.log(target[0])
        console.log('====dashboard-routes====')
        res.render('dashboard', { target })
    
    }).catch(err => {
            console.log(err);
            res.status(500).json(err);
          });
});

// router.get('/api/poses/targetgroup/:id', (req, res) => {
//     Pose.findAll({
//         where: {
//             target_group_id: req.params.id 
//         },
//         attributes: ['pose_name', 'difficulty'],
//         include: {
//             model: TargetGroup,
//             attributes: ['target_group']
//         }
//         })
//         .then(searchResults => {
//             console.log(searchResults)
//             //const searchRes = searchResults.map(result => result.get({ plain: true}))
//             //res.render()
//         })
//         .catch(err => res.status(500).json(err))
// });


module.exports = router;