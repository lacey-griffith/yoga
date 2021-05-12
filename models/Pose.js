const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pose extends Model {}

Pose.init(
  {
   id: {
       type: DataTypes.INTEGER,
       allowNull: false,
       primaryKey: true,
       autoIncrement: true
   },
   pose_name: {
       type: DataTypes.STRING,
       allowNull: false,
       unique: true,
       validate: {len: [1,30]}
   },
   chakra: {
       type: DataTypes.STRING,
       allowNull: true,
   },
   muscles_used: {
       type: DataTypes.STRING,
       allowNull: false,
       validate: {len: [1,20]}
   }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pose'
  }
);

module.exports = { Pose };