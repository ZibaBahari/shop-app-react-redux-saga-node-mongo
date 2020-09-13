const express = require('express');
const Router = express.Router();
const AuthController = require('../controller/auth')
const { check } = require('express-validator')

Router.put('/auth', check('Email')
.isEmail()
.withMessage('Email is not correct')
.normalizeEmail(),
check('Password')
.isLength({ min: 5 })
.withMessage('Password should be 5 character, at least')
.trim()
, AuthController.SignUp)
Router.post('/auth', AuthController.login)

module.exports = Router