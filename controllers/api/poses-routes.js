const router = require('express').Router();
const { Pose } = require('../../models');

// GET all poses
router.get('/', (req, res) => {
    Pose.findAll({

    })
    .then(poseData => res.json(poseData))
    .catch(err => res.status(500).json(err))
});

// GET poses by id
router.get('/:id', (req, res) => {
    Pose.findOne({
        where: {id: req.params.id }
    }).then(poseData => {
        if(!poseData){
            res.status(404).json({message: 'No pose was found!'})
            return
        }
        res.json(poseData)
    })
    .catch(err => res.status(500).json(err))
});

// POST new pose
router.post('/', (req, res) => {
    Pose.create({
        pose_name: req.body.pose_name,
        chakra: req.body.chakra,
        muscle_group: req.body.muscle_group
    }).then(poseData => res.json(poseData))
    .catch(err => res.status(500).json(err))
});

// PUT (update) a pose
router.put('/:id', (req, res) => {
    Pose.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(poseData => {
        if(!poseData){
            res.status(404).json({message: 'No pose was found!'})
            return
        }
        res.json(poseData)
    })
    .catch(err => res.status(500).json(err))
});

// DELETE post by id
router.delete('/:id', (req, res) => {
    Pose.destroy({
        where: {
            id: req.params.id
        }
    }).then(poseData => {
        if(!poseData){
            res.status(404).json({message: 'No pose was found!'})
            return
        }
        res.json(poseData)
    })
    .catch(err => res.status(500).json(err))
});

module.exports = router;