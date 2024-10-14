import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Layout from '../pages/Layout';
import NotFound from '../pages/NotFound';
import Property from '../components/Property'; 
import '../styles/App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="property/:id" element={<Property />} /> 
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;