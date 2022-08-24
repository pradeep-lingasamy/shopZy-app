import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/home/home';
import {NavLink, BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/header/header';
import Shop from './pages/shop/shop';
import Showdetail from './pages/showdetail/showdetail';
import Cart from './pages/cart/Cart';
import Favproduct from './pages/favproduct/Favproduct';
import About from './pages/about/about';
import Features from './pages/features/features';
import Contact from './pages/contact/contact';
import ScrollToTop from './pages/ScrollToTop';


function App() {
     return (
    <BrowserRouter>
            <ScrollToTop />
            <Header />
            <Routes>
                <Route path="/shopZy-app/">
                    <Route index element={<Home /> } />
                    <Route path="shop" element={<Shop />} > </Route>
                    <Route path='shop/:id' element={<Showdetail />} />
                    <Route path="cart" element={<Cart />} > </Route>
                    <Route path="fav" element={<Favproduct />} />
                    <Route path="features" element={<Features /> } />
                    <Route path="about" element={<About /> } />
                    <Route path="contact" element={<Contact /> } />
                </Route>

            </Routes>
        </BrowserRouter>
  );
}

export default App;
