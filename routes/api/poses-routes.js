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
router.get('/:id', (req, res) => {});

// POST new pose
router.post('/', (req, res) => {
    Pose.create({
        pose_name: req.body.pose_name,
        chakra: req.body.chakra,
        muscles_used: req.body.muscles_used
    }).then(poseData => res.json(poseData))
    .catch(err => res.status(500).json(err))
});

// PUT update a pose
router.put('/:id', (req, res) => {});

// DELETE post by id
router.delete('/:id', (req, res) => {});

module.exports = router;