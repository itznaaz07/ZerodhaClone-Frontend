import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from './context/AuthContext'; // <-- import AuthProvider here

import HomePage from './landing_page/home/Homepage';
import AboutPage from './landing_page/about/Aboutpage';
import Signup from './landing_page/signup/Signup.jsx';
import Login from './landing_page/login/Login.jsx';
import Productpage from './landing_page/products/ProductPage';
import Pricing from './landing_page/pricing/Pricingpage';
import SupportPage from './landing_page/support/Supportpage';
import Navbar from './Navbar';
import Footer from './Footer';
import Notfound from './Notfound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>  
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/About' element={<AboutPage />} />
        <Route path='/Product' element={<Productpage />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/support' element={<SupportPage />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </AuthProvider>
);
