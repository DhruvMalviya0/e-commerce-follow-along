const express = require('express')
const Product = require('../model/product');
const User = require('../model/user');
const router = express.Router();
const {pupload} = require('../multer')
const path = require('path');
const { model } = require('mongoose');
const mongoose = require('mongoose')
const {isAuthenticatedUser} = require("../middleware/auth");

const validateProductsData = (data) => {
    const errors = [];

    if (!data.name.trim()) errors.push("Name is required");
    if (!data.description) errors.push("Description is required");
    if (!data.category) errors.push("Category is required");
    if (!data.price || isNaN(data.price) || data.price <= 0) errors.push("Proper price is required");
    if (!data.stock || isNaN(data.stock) || data.stock <= 0) errors.push("Proper stock is required");
    if (!data.email) errors.push("Email is required");

    return errors;
};

// @route POST /api/products
router.post("/create-product", isAuthenticatedUser, pupload.array("images"), async (req, res) => {
    const { name, description, category, price, stock, email, tags } = req.body;
    const images = req.files ? req.files.map((file) => `/products/${file.filename}`) : [];

    const validationErrors = validateProductData({ name, description, category, price, stock, email, tags });
    if (validationErrors.length > 0) {
        return res.status(400).json({ errors: validationErrors });
    }

    if (images.length === 0) {
        return res.status(400).json({ message: "No images are uploaded" });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const newProduct = new Product({
            name, description, category, price, stock, email, tags, images,
            user: user._id
        });

        await newProduct.save();
        return res.status(201).json({ message: "Product created successfully", product: newProduct });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
    }
});

// @route GET /api/products
router.get("/get-products", async (req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        return res.status(200).json({ success: true, products });
    } catch (error) {
        console.error("Error fetching products:", error);
        return res.status(500).json({ success: false, message: "Error fetching products" });
    }
});

router.get("/my-products", isAuthenticatedUser, async (req, res) => {
    const { email } = req.query;
    try {
        const products = await Product.find({ email });
        res.status(200).json({ products });
    } catch (err) {
        console.error("Server error: ", err);
        res.status(500).json({ error: "Server error. Could not fetch products." });
    }
});

router.get("/product/:id",isAuthenticatedUser, async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(400).json({ error: "Product not found" });
        }
        res.status(200).json({ product });
    } catch (err) {
        console.log("Server Error", err.message);
        res.status(500).json({ error: "Server error: Could not fetch data" });
    }
});

router.put("/update-product/:id", isAuthenticatedUser, pupload.array("images", 10), async (req, res) => {
    const { id } = req.params;
    const { name, description, category, price, stock, email, tags } = req.body;

    try {
        const existingProduct = await Product.findById(id);
        if (!existingProduct) {
            return res.status(400).json({ error: "Product not found" });
        }

        let updatedImages = existingProduct.images;
        if (req.files && req.files.length > 0) {
            updatedImages = req.files.map((file) => `/products/${path.basename(file.path)}`);
        }

        const validationErrors = validateProductsData({ name, description, category, price, stock, email, tags });
        if (validationErrors.length > 0) {
            return res.status(400).json({ errors: validationErrors });
        }

        Object.assign(existingProduct, { name, description, category, price, tags, email, stock, images: updatedImages });

        await existingProduct.save();
        res.status(200).json({ message: "Updated successfully" });

    } catch (e) {
        console.log(e.message);
        res.status(500).json({ error: "Server error during update" });
    }
});

router.delete("/delete-product/:id", isAuthenticatedUser, async (req, res) => {
    const { id } = req.params;

    try {
        const existingProduct = await Product.findByIdAndDelete(id);
        if (!existingProduct) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (e) {
        console.log(e.message);
        res.status(500).json({ error: "Server error during deletion" });
    }
});

router.post("/cart", isAuthenticatedUser, async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;
        const email = userId;

        if (!email) return res.status(400).json({ message: "Email is required" });
        if (!mongoose.Types.ObjectId.isValid(productId)) return res.status(400).json({ message: "Invalid productId" });
        if (!quantity || quantity < 1) return res.status(400).json({ message: "Quantity should be at least 1" });

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "User not found" });

        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: "Product not found" });

        const cartItemIndex = user.cart.findIndex((item) => item.productId.toString() === productId);

        if (cartItemIndex > -1) {
            user.cart[cartItemIndex].quantity += quantity;
        } else {
            user.cart.push({ productId, quantity });
        }

        await user.save();
        res.status(200).json({ message: "Cart updated successfully" });

    } catch (err) {
        res.status(500).json({ error: "Server error" });
        console.error(err.message);
    }
});

router.get('/cartproducts', isAuthenticatedUser, async (req, res) => {
    try {
        const { email } = req.query;
        if (!email) {
            return res.status(400).json({ error: 'Email query parameter is required' });
        }
        const user = await User.findOne({ email }).populate({
            path: 'cart.productId',
            model: 'Product'
        });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({
            message: 'Cart retrieved successfully',
            cart: user.cart
        });
    } catch (err) {
        console.error('Server error:', err);
        res.status(500).json({ error: 'Server Error' });
    }
});

router.put("/cartproduct/quantity", isAuthenticatedUser, async (req, res) => {
    const { email, productId, quantity } = req.body;

    if (!email || !productId || quantity === undefined) {
        return res.status(400).json({ error: "Email, productId, and quantity are required" });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: "User not found" });

        const cartProduct = user.cart.find((item) => item.productId.toString() === productId);
        if (!cartProduct) return res.status(404).json({ error: "Product not found in cart" });

        cartProduct.quantity = quantity;
        await user.save();

        res.status(200).json({ message: "Cart updated successfully" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;