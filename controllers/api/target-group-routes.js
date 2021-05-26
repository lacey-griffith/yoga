const router = require('express').Router();
const { TargetGroup } = require('../../models');

//get all target groups
router.get('/', (req, res) => {
    TargetGroup.findAll({

}).then(targetData => res.json(targetData))
.catch(err => res.status(500).json(err))
});

//get target group by id
router.get('/:id', (req,res) => {
    TargetGroup.findOne({
        where: {
            id: req.params.id
        }
}).then(targetData => {
    if(!targetData){
        res.status(404).json({message: 'Target group not found.'})
        return
    }
    res.json(targetData)
    }).catch(err => res.status(500).json(err))
});

//create new target group
router.post('/', (req, res) => {
    TargetGroup.create({
        target_group: req.body.target_group
    }).then(targetData => res.json(targetData))
    .catch(err => res.status(500).json(err))
});

//update target group
router.put('/:id', (req, res) => {
    TargetGroup.update(
        {target_group: req.body.target_group}, {
        where: {
            id: req.params.id
        }
    }).then(targetData => {
        if(!targetData){
            res.status(404).json({message: 'Target group not found.'})
            return
        }
        res.json(targetData)
    }).catch(err => res.status(500).json(err))
});


//delete target group
router.delete('/:id', (req, res) => {
    TargetGroup.destroy({
        where: {
            id: req.params.id
        }
    }).then(targetData => {
        if(!targetData){
            res.status(404).json({message: 'Target group not found.'})
            return
        }
        res.json(targetData)
    }).catch(err => res.status(500).json(err))
});

module.exports = router;