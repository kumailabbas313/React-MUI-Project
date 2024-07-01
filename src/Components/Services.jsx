// src/Components/Services.jsx
import React from 'react';
import '../Styles/Services.css';
import Heroimage from '../Assets/Services/Heroimage.jpg';
import Service1 from '../Assets/Services/Service1.jpg';
import Service2 from '../Assets/Services/Service2.jpg';
import Service3 from '../Assets/Services/Service3.jpg';
import Service4 from '../Assets/Services/Service4.jpg';
import Service5 from '../Assets/Services/Service5.jpg';
import Service6 from '../Assets/Services/Service6.jpg';
import { useCardContext } from '../context/CardContext'; 

const services = [
  { image: Service1, title: 'Service 1', description: 'Description of Service 1.' },
  { image: Service2, title: 'Service 2', description: 'Description of Service 2.' },
  { image: Service3, title: 'Service 3', description: 'Description of Service 3.' },
  { image: Service4, title: 'Service 4', description: 'Description of Service 4.' },
  { image: Service5, title: 'Service 5', description: 'Description of Service 5.' },
  { image: Service6, title: 'Service 6', description: 'Description of Service 6.' },
];

const Services = () => {
  const { cardComponent } = useCardContext(); 
  return (
      <div className="services">
        <div className="hero" style={{ backgroundImage: `url(${Heroimage})` }}>
          <h1>Our Services</h1>
        </div>
        <div className="services-list">
          {services.map((service, index) => (
            <div className="service-container" key={index}>
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-description">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        {cardComponent && (
        <div>
          <h3>Shared Card:</h3>
          {cardComponent}
        </div>
      )}
      </div>
      
  );
};

export default Services;
