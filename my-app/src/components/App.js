import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import NotFound from './Notfound';  
import Layout from './Layout';
import '../styles/App.scss';  

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      
      
      <Route path="/about" element={<Layout />}>
        <Route index element={<About />} />
      </Route>

      
      <Route path="*" element={<Layout />}>
        <Route index element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;