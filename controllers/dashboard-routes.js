const router = require('express').Router();
const sequelize = require('../config/connection');
const {User, Pose, TargetGroup, Comment} = require('../models');
//link function for validating users are logged in
//const *function* = require('../utils/auth')


//module.exports = router;