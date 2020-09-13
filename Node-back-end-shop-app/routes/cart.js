const express = require('express');
const Router = express.Router();
const CartController = require('../controller/cart')
const checkAuth = require('../middleware/check-auth')


Router.use(checkAuth)
Router.get('/cart',CartController.getCart)
Router.put('/cart', CartController.addCart)
Router.delete('/cart', CartController.deleteCart)

module.exports = Router