import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/pages/Homepage/Home/Home';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import Products from './components/pages/Homepage/Products/Products';
import Loging from './components/Loging/Loging/Loging';
import Regestation from './components/Loging/Regestation/Regestation';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/loging" element={<Loging />} />
        <Route path="/regestation" element={<Regestation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
