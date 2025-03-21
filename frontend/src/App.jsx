//eslint-disable-next-line
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUpPage from "./pages/SignUpPage";
import ProductDetails from "./pages/productDetails";
import CreateProduct from "./pages/createProduct";
import MyProducts from "./pages/myProducts";
import Cart from "./pages/cart";
import Profile from "./pages/profile";
import CreateAddress from "./pages/createAddress";
import Products from "./pages/products";
import SelectAddress from "./pages/selectAddress";
import OrderConfirmation from "./pages/orderConfirmation";
import Orders from "./pages/orders";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/my-products" element={<MyProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-address" element={<CreateAddress />} />
          <Route path="/products" element={<Products />} />
          <Route path="/select-address" element={<SelectAddress />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;