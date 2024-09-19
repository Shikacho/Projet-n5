import React from 'react';
import image from '../assets/section.png';  


function Home() {
  return (
    <div className="home-container">
      <img src={image} alt="Description de l'image" className="home-image" />
    </div>
  );
}

export default Home;