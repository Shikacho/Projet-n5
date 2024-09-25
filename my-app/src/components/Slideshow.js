import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import arrowIcon from '../assets/arrow_down.png'; 
import '../styles/Slideshow.scss';

function Slideshow() {
  const { id } = useParams();
  const item = data.find(item => item.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setIsEquipmentsOpen] = useState(false);

  if (!item) {
    return <div>Item not found</div>;
  }

  const pictures = item.pictures;
  const totalImages = pictures.length;

  const nextSlide = () => {
    setCurrentImageIndex((currentImageIndex + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentImageIndex((currentImageIndex - 1 + totalImages) % totalImages);
  };

  const renderStars = () => {
    const fullStars = Math.floor(item.rating);
    const emptyStars = 5 - fullStars;
    return (
      <>
        {'★'.repeat(fullStars)}
        {'☆'.repeat(emptyStars)}
      </>
    );
  };

  return (
    <div className="slideshow-container">
      
      <div className="slideshow-image-container">
        <img 
          src={pictures[currentImageIndex]} 
          alt={`Slide ${currentImageIndex + 1}`} 
          className="slideshow-image" 
        />
        {totalImages > 1 && (
          <>
            <button className="prev" onClick={prevSlide}>‹</button>
            <button className="next" onClick={nextSlide}>›</button>
            <div className="slide-number">
              {currentImageIndex + 1} / {totalImages}
            </div>
          </>
        )}
      </div>

      <div className="title-host-container">
        <div className="title">{item.title}</div>
        <div className="host">
          <div className="host-info">
            <p className="host-name">{item.host.name}</p>
            <div className="rating">{renderStars()}</div>
          </div>
          <img src={item.host.picture} alt={item.host.name} className="host-picture" />
        </div>
      </div>

      <div className="location">{item.location}</div>

      <div className="tags">
        {item.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>

      <div className="slideshow-collapse-container">
       
        <div className={`slideshow-collapse ${isDescriptionOpen ? 'open' : ''}`}>
          <div className="slideshow-collapse-header" onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}>
            <span>Description</span>
            <span className="slideshow-collapse-arrow">
              <img src={arrowIcon} alt="Ouvrir" width="24" height="24" /> 
            </span>
          </div>
          <div className="slideshow-collapse-content">
            <p>{item.description}</p>
          </div>
        </div>

        <div className={`slideshow-collapse ${isEquipmentsOpen ? 'open' : ''}`}>
          <div className="slideshow-collapse-header" onClick={() => setIsEquipmentsOpen(!isEquipmentsOpen)}>
            <span>Équipements</span>
            <span className="slideshow-collapse-arrow">
              <img src={arrowIcon} alt="Ouvrir" width="24" height="24" /> 
            </span>
          </div>
          <div className="slideshow-collapse-content">
            <ul className="equipments-list">
              {item.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;