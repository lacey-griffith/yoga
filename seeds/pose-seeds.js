const { Pose } = require('../models')

const poseData = [
    {
        pose_name: 'Boat Pose',
        difficulty: 'Beginner',
        target_group: [1]
    },
    {
        pose_name: 'Crow Pose',
        difficulty: 'Intermidiate',
        target_group_id: [1]
    },
    {
        pose_name: 'Triangle Pose',
        difficulty: 'Intermidiate',
        target_group_id: [2]
    },
    {
        pose_name: 'King Pigeon Pose',
        difficulty: 'Advanced',
        target_group_id: [2]
    },
    {
        pose_name: 'Half Frog Pose',
        difficulty: 'Advanced',
        target_group_id: [3]
    },
    {
        pose_name: 'Chair Pose',
        difficulty: 'Beginner',
        target_group_id: [3]
    },
    {
        pose_name: 'Child Pose',
        difficulty: 'Beginner',
        target_group_id: [4]
    },
    {
        pose_name: 'Heron Pose',
        difficulty: 'Intermidiate',
        target_group_id: [4]
    },
    {
        pose_name: 'Garland Pose',
        difficulty: 'Intermidiate',
        target_group_id: [1]
    },
    {
        pose_name: 'One Legged king Pigeon',
        difficulty: 'Advanced',
        target_group_id: [1]
    },
    {
        pose_name: 'Noose Pose',
        difficulty: 'Advanced',
        target_group_id: [1]
    },
    {
        pose_name: 'Downward Facing Dog',
        difficulty: 'Beginner',
        target_group_id: [1]
    },
    {
        pose_name: 'Dolphin Pose',
        difficulty: 'Beginner',
        target_group_id: [1]
    },
    {
        pose_name: 'Supported Headstand',
        difficulty: 'Intermidiate',
        target_group_id: [1]
    },
    {
        pose_name: 'Side Crow Pose',
        difficulty: 'Advanced',
        target_group_id: [1]
    },
    {
        pose_name: 'Eight Angle Pose',
        difficulty: 'Advanced',
        target_group_id: [1]
    },
    {
        pose_name: 'Cat Pose',
        difficulty: 'Beginner',
        target_group_id: [1]
    },
    {
        pose_name: 'Cow Pose',
        difficulty: 'Beginner',
        target_group_id: [1]
    },
    {
        pose_name: 'Bridge Pose',
        difficulty: 'Beginner',
        target_group_id: [1]
    },
    {
        pose_name: 'Cobra Pose',
        difficulty: 'Intermidiate',
        target_group_id: [1]
    },
    {
        pose_name: 'Half Lord Of The Fishes Pose',
        difficulty: 'Advanced',
        target_group_id: [1]
    }
    // ,
    // {
    //     title: '',
    //     difficulty: '',
    //     target_group_id: []
    // },
    // {
    //     title: '',
    //     difficulty: '',
    //     target_group_id: []
    // }
]

const seedPoses = () => Pose.bulkCreate(poseData);

module.exports = seedPoses;