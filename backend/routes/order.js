const express = require('express');
const router = express.Router();
const orderController = require('../controller/order');

// Place a new order
router.post('/place-order', orderController.placeOrder);

// Get user's orders
router.get('/user-orders', orderController.getUserOrders);

module.exports = router; 