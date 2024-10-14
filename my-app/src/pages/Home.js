import React from 'react';
import { Link } from 'react-router-dom'; 
import Card from '../components/Card';
import data from '../data/data.json';
import '../styles/App.scss';
import image from '../assets/section.png';  

function Home() {
  return (
    <div className="home-container">
      <img src={image} alt="Description de l'image" className="home-image" />
      <div className="card-container">
        {data.map((item) => (
          <Link key={item.id} to={`/property/${item.id}`}>
            <Card title={item.title} cover={item.cover} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;