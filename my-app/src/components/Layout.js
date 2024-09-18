import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Banner from './Banner';
import Home from './Home';
import Card from './Card';
import data from './data.json';

function Layout({ children }) {
  const location = useLocation();  // Utilisation de useLocation pour détecter la route active

  return (
    <div>
      <Banner />

      {location.pathname !== '/about' && <Home />}


      {/* Affichage des cartes uniquement si on n'est pas sur la page About */}
      {location.pathname !== '/about' && (
        <div className="card-container">
          {data.map(item => (
            <Card 
              key={item.id}
              title={item.title}
              cover={item.cover}
            />
          ))}
        </div>
      )}

      {/* Affichage du contenu des autres pages */}
      {children}

      <Footer />
    </div>
  );
}

export default Layout;