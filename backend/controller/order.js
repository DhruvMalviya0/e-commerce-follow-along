const express = require("express");
const router = express.Router();
const Order = require('../model/order');
const User = require('../model/user');
const Product = require('../model/product');

// Create order
router.post('/create-order', async (req, res) => {
    try {
        const { email, shippingAddress, orderItems, totalAmount } = req.body;

        // Validate request data
        if (!email) {
            return res.status(400).json({ error: "Email is required" });
        }
        if (!shippingAddress) {
            return res.status(400).json({ error: "Shipping address is required" });
        }
        if (!orderItems || !Array.isArray(orderItems) || orderItems.length === 0) {
            return res.status(400).json({ error: "Order items are required" });
        }

        // Find user
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // Create new order
        const order = new Order({
            user: user._id,
            orderItems,
            shippingAddress,
            totalAmount,
            orderStatus: 'Processing'
        });

        // Save the order
        await order.save();

        // Clear user's cart
        user.cart = [];
        await user.save();

        // Update product stock
        for (const item of orderItems) {
            const product = await Product.findById(item.product);
            if (product) {
                product.stock -= item.quantity;
                await product.save();
            }
        }

        res.status(201).json({
            message: "Order placed successfully",
            order: order
        });

    } catch (err) {
        console.error("Error placing order:", err);
        res.status(500).json({ error: "Failed to place order" });
    }
});

// Get user's orders
router.get('/get-orders', async (req, res) => {
    try {
        const { email } = req.query;
        
        if (!email) {
            return res.status(400).json({ error: "Email is required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const orders = await Order.find({ user: user._id })
            .sort({ createdAt: -1 });

        res.status(200).json({
            message: "Orders fetched successfully",
            orders: orders
        });

    } catch (err) {
        console.error("Error fetching orders:", err);
        res.status(500).json({ error: "Failed to fetch orders" });
    }
});

module.exports = router;