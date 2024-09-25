import React from 'react';
import '../styles/NotFound.scss'; // Assurez-vous d'avoir un fichier SCSS pour styliser cette page

function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-text">Oups! La page que vous demandez n'existe pas.</p>
      <a href="/" className="notfound-link">Retourner sur la page d'accueil</a>
    </div>
  );
}

export default NotFound;