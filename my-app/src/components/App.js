import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import Layout from './Layout';
import Slideshow from './Slideshow'; 
import '../styles/App.scss';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="property/:id" element={<Slideshow />} /> 
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;