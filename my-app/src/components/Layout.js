import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Banner from './Banner';
import Home from './Home';
import Card from './Card';
import data from './data.json';
import About from './About';  

function Layout({ children }) {
  const location = useLocation();

  return (
    <div>
      <Banner />

      
      {location.pathname === '/about' ? (
        <About />
      ) : (
        <>
          <Home />
          
          <div className="card-container">
            {data.map(item => (
              <Card 
                key={item.id}
                title={item.title}
                cover={item.cover}
              />
            ))}
          </div>
        </>
      )}

      
      {children}

      <Footer />
    </div>
  );
}

export default Layout;