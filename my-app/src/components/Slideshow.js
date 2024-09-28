import React, { useState } from 'react';
import '../styles/Slideshow.scss';

function Slideshow({ pictures }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const totalImages = pictures.length;

  const nextSlide = () => {
    setCurrentImageIndex((currentImageIndex + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentImageIndex((currentImageIndex - 1 + totalImages) % totalImages);
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
    </div>
  );
}

export default Slideshow;