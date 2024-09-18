import React from 'react';
import '../styles/Card.scss'; 

function Card({ title, cover }) {
    return (
      <div className="card" style={{ backgroundImage: `url(${cover})` }}>
        <div className="card-title">{title}</div>
      </div>
    );
  }
  
  export default Card;