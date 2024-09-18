import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

function Banner() {
  const location = useLocation();

  return (
    <div className="banner">
      <Link to="/">
        <img src={logo} alt="Logo du site" className="logo" />
      </Link>

      <nav className="nav">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Accueil
        </Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
          À Propos
        </Link>
      </nav>
    </div>
  );
}

export default Banner;