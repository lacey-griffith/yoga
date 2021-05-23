const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {
    //add check password function
    // checkPassword(loginPw) {
    //     return bcrypt.compareSync(loginPw, this.password)
    // }
    //add hooks to model
}

User.init(
  {
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
       // validate: {
        //  len: [4]
       // }
      }
  },
  //hooks go here
  // hooks: {
  // async functions for hashing password
  // async function for hashing updated password
  //},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;