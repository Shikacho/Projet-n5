import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import data from '../data/data.json';
import arrowIcon from '../assets/arrow_down.png'; 
import '../styles/Property.scss';
import Slideshow from './Slideshow'; 

function Property() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const item = data.find(item => item.id === id);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

  useEffect(() => {
    if (!item) {
      navigate('/notfound'); 
    }
  }, [item, navigate]);

  if (!item) {
    return null; 
  }

  return (
    <>
      <Slideshow pictures={item.pictures} />

      <div className="property-container">
        <div className='container'>
          <div className='container-location-tags'>
            <div className="title">{item.title}</div>
            <div className="location">{item.location}</div>

            <div className="tags">
              {item.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}  
            </div>
          </div>
          <div className="title-host-container">   
            <div className="host">
              <div className="host-info">
                <p className="host-name">{item.host.name}</p>
                <img src={item.host.picture} alt={item.host.name} className="host-picture" />
              </div>
              <div className="rating">{renderStars(item.rating)}</div>
            </div>
          </div>
        </div>

        <div className="property-collapse-container">
          <div className={`property-collapse ${isDescriptionOpen ? 'open' : ''}`}>
            <div className="property-collapse-header" onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}>
              <span>Description</span>
              <span className="property-collapse-arrow">
                <img src={arrowIcon} alt="Ouvrir" width="24" height="24" /> 
              </span>
            </div>
            <div className="property-collapse-content">
              <p>{item.description}</p>
            </div>
          </div>

          <div className={`property-collapse ${isEquipmentsOpen ? 'open' : ''}`}>
            <div className="property-collapse-header" onClick={() => setIsEquipmentsOpen(!isEquipmentsOpen)}>
              <span>Équipements</span>
              <span className="property-collapse-arrow">
                <img src={arrowIcon} alt="Ouvrir" width="24" height="24" /> 
              </span>
            </div>
            <div className="property-collapse-content">
              <ul className="equipments-list">
                {item.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;
  return (
    <>
      {'★'.repeat(fullStars)}
      {'☆'.repeat(emptyStars)}
    </>
  );
};

export default Property;