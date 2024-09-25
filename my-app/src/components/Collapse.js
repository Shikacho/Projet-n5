import React, { useState } from 'react';
import arrowIcon from '../assets/arrow_down.png';

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse-container ${isOpen ? 'dropdown-open' : ''}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <span className="collapse-arrow">
          <img
            src={arrowIcon}
            alt={isOpen ? "Fermer" : "Ouvrir"}
            width="24"
            height="24"
          />
        </span>
      </div>
      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;