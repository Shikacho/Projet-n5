import React from 'react';
import '../styles/Card.scss'; 

function Card({ title, cover, link }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${cover})` }}>
      <a href={link} className="card-title">{title}</a>
    </div>
  );
}

export default Card;