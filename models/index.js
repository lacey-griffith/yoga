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

//comments belong to user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

//user has many comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
})

//comments belong to pose
Comment.belongsTo(Pose, {
    foreignKey: 'pose_id'
})

//poses have many comments
Pose.hasMany(Comment, {
    foreignKey: 'pose_id'
});

// Pose.belongsTo(TargetGroup, {
//     foreignKey: 'target_group_id'
// })


module.exports = { Pose, User, Comment, TargetGroup };
