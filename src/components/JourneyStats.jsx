import React from 'react';
import './JourneyStats.css';

const stats = [
  { number: "150+", label: "Events Organized" },
  { number: "10+", label: "Years of Experience" },
  { number: "95%", label: "Client Satisfaction" },
  { number: "50+", label: "Venues Covered" },
];

const JourneyStats = () => {
  return (
    <section className="journey">
      <h2 className="journey-title">Our Journey in Numbers</h2>
      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stat-box" key={index}>
            <h3 className="stat-number">{item.number}</h3>
            <p className="stat-label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JourneyStats;
