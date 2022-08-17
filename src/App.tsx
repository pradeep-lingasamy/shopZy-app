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
                <Route path="/shopZy-app/" element={<Home /> } />
                <Route path="/shopZy-app/shop" element={<Shop />} > </Route>
                <Route path='/shopZy-app/shop/:id' element={<Showdetail />} />
                <Route path="/shopZy-app/cart" element={<Cart />} > </Route>
                <Route path="/shopZy-app/fav" element={<Favproduct />} />
                <Route path="/shopZy-app/features" element={<Features /> } />
                <Route path="/shopZy-app/about" element={<About /> } />
                <Route path="/shopZy-app/contact" element={<Contact /> } />

            </Routes>
        </BrowserRouter>
  );
}

export default App;
