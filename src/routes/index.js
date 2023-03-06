import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from 'pages/home';

export default function index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}
