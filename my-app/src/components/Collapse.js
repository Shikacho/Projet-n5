import React, { useState } from 'react';
import arrowUpIcon from '../assets/arrow_up.png';  
import arrowDownIcon from '../assets/arrow_down.png';  

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
          {isOpen ? (
            
            <img src={arrowUpIcon} alt="Fermer" width="24" height="24" />
          ) : (
            
            <img src={arrowDownIcon} alt="Ouvrir" width="24" height="24" />
          )}
        </span>
      </div>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
  );
}

export default Collapse;