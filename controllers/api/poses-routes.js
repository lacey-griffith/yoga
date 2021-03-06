const router = require('express').Router();
const isLoggedIn = require('../../utils/auth')
const { Pose, TargetGroup } = require('../../models');


// GET all poses
router.get('/', (req, res) => {
    Pose.findAll({
        attributes: ['id','pose_name','difficulty','demo','description','target_group_id'],
        include: {
            model: TargetGroup,
            attributes: ['id','target_group']
        }
    })
    .then(poseData => res.json(poseData))
    .catch(err => res.status(500).json(err))
});

// GET poses by id
router.get('/:id', (req, res) => {
    Pose.findOne({
        where: {
            id: req.params.id
        },
        include: {
            model: TargetGroup,
            attributes: ['target_group']
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

// POST new pose
router.post('/', (req, res) => {
    Pose.create({
        pose_name: req.body.pose_name,
        difficulty: req.body.difficulty,
        description: req.body.description,
        demo: req.body.demo,
        target_group_id: req.body.target_group_id
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