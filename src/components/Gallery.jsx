import React from 'react';
import './Gallery.css';

const images = [
  '/images/event1.png',
  '/images/event2.png',
  '/images/event3.png',
  
];

const Gallery = () => {
  return (
    <section className="gallery">
      <h2 className="gallery-title">Memorable Moments</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <div className="gallery-item" key={index}>
            <img src={src} alt={`Event ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
