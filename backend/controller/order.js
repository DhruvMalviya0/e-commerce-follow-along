const express = require("express");
const router = express.Router();
const Order = require('../model/order');
const User = require('../model/user');
const Product = require('../model/product');

router.post('/place-order', async (req, res) => {
    try {
        const { email, shippingAddress } = req.body;

        // Validate request data
        if (!email) {
            return res.status(400).json({ error: "Email is required" });
        }
        if (!shippingAddress) {
            return res.status(400).json({ error: "Shipping address is required" });
        }

        // Find user and populate their cart with product details
        const user = await User.findOne({ email }).populate({
            path: 'cart.productId',
            model: 'Product'
        });

        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        if (!user.cart || user.cart.length === 0) {
            return res.status(400).json({ error: "Cart is empty" });
        }

        // Calculate total amount and prepare order items
        let totalAmount = 0;
        const orderItems = user.cart.map(item => {
            const product = item.productId;
            const itemTotal = product.price * item.quantity;
            totalAmount += itemTotal;

            return {
                product: product._id,
                name: product.name,
                quantity: item.quantity,
                price: product.price,
                image: product.images[0]
            };
        });

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
        for (const item of user.cart) {
            const product = item.productId;
            product.stock -= item.quantity;
            await product.save();
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
router.get('/user-orders', async (req, res) => {
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
            .populate('orderItems.product')
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