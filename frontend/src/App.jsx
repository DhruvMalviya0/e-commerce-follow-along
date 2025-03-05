//eslint-disable-next-line
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import {Home, LoginPage } from './Routes/route.js';
import { SignupPage } from './Routes/route.js';
import { CreateProduct } from './Routes/route.js';
import { MyProducts } from './Routes/route.js';
import {Cart} from './Routes/route.js';
import { ProductDetails } from './Routes/route.js';
import { Profile } from './Routes/route.js';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/create-product" element={<CreateProduct />}></Route>
        <Route path="/products" element={<MyProducts/>}></Route>
        <Route path='/cart' element={<Cart />} />
        <Route path="/create-product/:id" element={<CreateProduct />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;