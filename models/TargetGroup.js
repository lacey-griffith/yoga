const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TargetGroup extends Model {}

TargetGroup.init({
    id: {
     type: DataTypes.INTEGER,
     allowNull: false,
     primaryKey: true,
     autoIncrement: true
    },
    target_group: {
     type: DataTypes.STRING,
     allowNull: true,
     unique: true,
     validate: { len: [1, 30] }
    },
    pose_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'pose',
        key: 'id'
      }
    }
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'targetGroup'
});

module.exports = TargetGroup