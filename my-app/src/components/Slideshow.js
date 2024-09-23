import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import Collapse from './Collapse';
import '../styles/Slideshow.scss';

function Slideshow() {
  const { id } = useParams();
  const item = data.find(item => item.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!item) {
    return <div>Item not found</div>;
  }

  const pictures = item.pictures;
  const totalImages = pictures.length;

  const nextSlide = () => {
    setCurrentImageIndex((currentImageIndex + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + totalImages) % totalImages
    );
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

      
      <div className="collapse-container">
        <Collapse title="Description">
          <p>{item.description}</p>
        </Collapse>

       
        <Collapse title="Équipements">
          <ul className="equipments-list">
            {item.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Slideshow;