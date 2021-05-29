const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pose extends Model { }

Pose.init({

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
    validate: { len: [1, 30] },
    defaultValue: ''
  },
  difficulty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  target_group_id: {
    type: DataTypes.STRING,
   references: {
     model: 'targetGroup',
     key: 'id'
   }
  }
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pose'
  });

  
module.exports = Pose;