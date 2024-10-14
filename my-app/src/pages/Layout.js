import React from 'react';
import { Outlet } from 'react-router-dom';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

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