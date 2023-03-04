import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from 'pages/home';
import About from 'pages/about';

export default function index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </Router>
  );
}
