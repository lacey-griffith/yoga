const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const { beforeUpdate } = require('./Comment');

class User extends Model {
  //add check password function
  // checkPassword(loginPw) {
  //     return bcrypt.compareSync(loginPw, this.password)
  // }
  //add hooks to model
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [4]
    }
  }
}, {
  hooks: {
    async beforeCreate(newUserData) {
      newUserData.password = await bcrypt.hash(newUserData.password, 10)
      return newUserData;
    },
    async beforeUpdate(updatedUserData){
      updatedUserData.password = await bcrypt.hash(newUserData.password, 10);
      return updatedUserData;
    }
  },
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'user'
});

module.exports = User;