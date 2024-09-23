import React from 'react';
import Card from './Card';
import data from '../data/data.json';
import '../styles/App.scss';
import image from '../assets/section.png';  

function Home() {
  return (
    <div className="home-container">
      
      <img src={image} alt="Description de l'image" className="home-image" />

     
      <div className="card-container">
        {data.map((item) => (
          <Card key={item.id} title={item.title} cover={item.cover} />
        ))}
      </div>
    </div>
  );
}

export default Home;