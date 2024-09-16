import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/Notfound';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout>
        <Home />
      </Layout>} />
      <Route path="/about" element={<Layout>
        <About />
      </Layout>} />
      <Route path="*" element={<Layout>
        <NotFound />
      </Layout>} />
    </Routes>
  );
}

export default App;