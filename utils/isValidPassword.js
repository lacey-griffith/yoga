const bcrypt = require('bcrypt');

const isValidPassword = (userPassword, password) => {
    return bcrypt.compareSync(password, userPassword)
};

module.exports = isValidPassword;