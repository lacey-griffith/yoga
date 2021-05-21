const { TargetGroup } = require('../models')

const targetGroupData = [
    {
        target_group: 'Abs'
    },
    {
        target_group: 'Ankles'
    },
    {
        target_group: 'Arms'
    },
    {
        target_group: 'Back'
    },
    {
        target_group: 'Belly'
    },
    {
        target_group: 'Bladder'
    },
    {
        target_group: 'Lower Back'
    },
    {
        target_group: 'Upper Back'
    },
    {
        target_group: 'Heart'
    },
    {
        target_group: 'Knees'
    },
    {
        target_group: 'Hips'
    },
    {
        target_group: 'Hip Flexors'
    },
    {
        target_group: 'Shoulders'
    },
    {
        target_group: 'Spine'
    },
    {
        target_group: 'Liver'
    },
    {
        target_group: 'Neck'
    },
    {
        target_group: 'Wrists'
    },
]

const seedTargetGroup = () => TargetGroup.bulkCreate(targetGroupData)

module.exports = seedTargetGroup