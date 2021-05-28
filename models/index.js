const Comment = require('./Comment');
const Pose = require('./Pose');
const User = require('./User');
const TargetGroup = require('./TargetGroup')


//create associations

//user has many poses
User.hasMany(Pose, {
    foreignKey: 'user_id'
});

// pose belongs to one user MANY TO ONE RELATIONSHIP
Pose.belongsTo(User, {
    foreignKey: 'user_id'
});

//poses have many comments
Pose.hasMany(Comment, {
    foreignKey: 'pose_id'
});

TargetGroup.belongsTo(Pose, {
    foreignKey: 'pose_id'
})

Pose.hasMany(TargetGroup, {
    foreignKey: 'pose_id'
})

module.exports = { Pose, User, Comment, TargetGroup };
