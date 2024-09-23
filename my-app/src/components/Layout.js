import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from './Banner';
import Footer from './Footer';

function Layout() {
  return (
    <div>
      <Banner />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}

export default Layout;