import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = hero.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25;
      const y = (e.clientY - top - height / 2) / 25;

      hero.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
    };

    const resetTransform = () => {
      hero.style.transform = `rotateX(0deg) rotateY(0deg)`;
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', resetTransform);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', resetTransform);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-content" ref={heroRef}>
        <h1>Turning Special Moments into Timeless Memories</h1>
        <p>Celebrate your life’s milestones with elegance and style.</p>
        <div className="hero-buttons">
          <button className="book-now-btn">Explore Services</button>
          <button className="book-now-btn">Book Now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
