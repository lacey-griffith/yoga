const Comment = require('./Comment');
const Pose = require('./Pose');
const User = require('./User');


//create associations

//user has many poses
User.hasMany(Pose, {
    foreignKey: 'user_id'
});

//user has many comments
User.hasMany(Comment, {
    foreignKey: 'user_id'
})

//comments belong to user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

//comments belong to pose
Comment.belongsTo(Pose, {
    foreignKey: 'pose_id'
})

//poses have many users
Pose.hasMany(User, {
    foreignKey: 'pose_id'
})
//poses have many comments
Pose.hasMany(Comment, {
    foreignKey: 'pose_id'
})

module.exports = { Pose, User, Comment };
