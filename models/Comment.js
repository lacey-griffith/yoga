const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {len: [10]}
    },
    pose_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'pose',
            key: 'id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },
},
{
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
})

module.exports = Comment;