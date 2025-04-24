import './App.css'

import React from 'react';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import {ProductDetails, SignupPage} from './Routes/routes.js';
import {Home, LoginPage} from "./Routes/routes.js";
import {CreateProduct,MyProducts,Cart,Profile, CreateAddress, SelectAddress, OrderConfirmation, MyOrdersPage} from "./Routes/routes.js";

const App=()=> {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/product' element={<CreateProduct/>}/>
      <Route path='/product/:id' element={<CreateProduct/>}/>
      <Route path='/myproducts' element={<MyProducts/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/productdetails/:id' element={<ProductDetails/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/create-address' element={<CreateAddress/>}/>
      <Route path='/select-address' element={<SelectAddress/>}/>
      <Route path='/order-confirmation' element={<OrderConfirmation/>}/>
      <Route path='/myorders' element={<MyOrdersPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App
