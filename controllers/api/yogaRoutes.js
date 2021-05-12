const router = require('express').Router();
const {Pose} = require('../../models')

//GET 
router.get('/', (req, res) => {
    Pose.findAll({
    }).then(poseData => {
        console.log('this part works')
        res.json(poseData)
    })
    .catch(err => res.status(500).json(err))
})
//POST
router.post('/poses', (req, res) => {

})
//PUT
//DELETE

module.exports = router;