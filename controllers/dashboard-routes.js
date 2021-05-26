const router = require('express').Router();
const sequelize = require('../config/connection');
const isLoggedIn = require('../utils/auth')
const {User, Pose, TargetGroup, Comment} = require('../models');



module.exports = router;