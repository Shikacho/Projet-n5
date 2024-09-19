import React from 'react';
import logo from '../assets/logo2.png'; 

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Mon logo" className="footer-logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;