const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Pose extends Model {};

Pose.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {len: [1,25]}
    },
    muscle_group: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {len: [1,20]}
    },
    chakra: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {len: [1,15]}
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pose'
})

module.exports = Pose;