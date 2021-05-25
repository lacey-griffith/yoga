const router = require('express').Router();
const { TargetGroup } = require('../../models');

//get all target groups
router.get('/', (req, res) => {
    TargetGroup.findAll({

}).then(targetData => res.json(targetData))
.catch(err => res.status(500).json(err))
})

//get target group by id
// router.get('/:id', (req,res) => {
//     TargetGroup.findOne({

//     })
// })

//update target group
// router.put('/:id', (req, res) => {

// })

//create new target group
// router.post('/', (req, res) => {

// })

//delete target group
// router.delete('/:id', (req, res) => {

// })
module.exports = router;