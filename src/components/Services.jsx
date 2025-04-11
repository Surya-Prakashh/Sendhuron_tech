// src/components/Services.jsx
import React, { useState } from "react";
import "./Services.css";

const servicesData = [
  {
    title: "Wedding Photography & Videography",
    description:
      "Your wedding is a once-in-a-lifetime event, and we ensure every precious moment is beautifully captured. We specialize in candid shots and cinematic videography.",
    image: "https://s3-alpha-sig.figma.com/img/6fce/0683/0ac64ea165d0694b43fc20b33f081126?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=B9kVqMscVbatMldmJruTe4cu5ZZoxrOPcDpIO~gV6oL1HhrnY272TKEPCu72nem30Co2DoxKDkgk8bqAp8xCKs9e3Us968XnHLerVCYyMVS9HiKoZzW0XgSgjnbt0AejtpxLCR8R8YEc8sbOxlqYyvo8TqOtE3TelbX0s7CqXaanRIFVKxnlFS4YDTdzlXqfhc0LZUi96MruprXi2gSkFF1q~M7NiskD1RG6Ix3UuKLNYGRLy7hJVOBYhpIeSpORttxa5gmsfeg6Hc4HRjCU0b7t17BDDRmsWeyYjd2hY2RNd8R8jr34NxLdos1KWcqNZEtPTp75-fsMBEhFCd~1vg__",
    buttons: true,
  },
  {
    title: "New Born Baby Shoots & Toddlers",
    description:
      "Adorable, creative setups for your baby’s first memories.",
    image: "https://s3-alpha-sig.figma.com/img/1f3f/ac35/8248835dbd1e9507e17b9ca76376bfe1?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=uAnQt3VCbVQzMNZ3spFg-aG-fsbafMB28FdyBcMEpTg8zcGfXY4~CoQQI473uk5L4ldaW0OJL9AqYMt9MoCCbPZYEFMTD2gC3I0IveIRXB0GKit-jJDwkSYHC6THJcNb35CVdlewbldPb966Pp4IurKAPelDw4AkkkfGOEuwnSBFzvlMxgrWc0nPBG4fP6onK6gbjKs6yBWBXpHhzE1GRrKNPd0mBI7oqNgz4ULMoueiLeJlkBBjdCNkmzpHW-LF6gGhpVMYT7jH7rs5~en9mD0laIdp5jg83fJwaBezD~d7UUqSluq80WKSSfBVozDDln-PHZK0DsaFrstxFEg0Pw__",
  },
  {
    title: "Ear Piercing Ceremony",
    description:
      "Capture the precious cultural moment with grace and tradition.",
    image: "https://s3-alpha-sig.figma.com/img/6fce/0683/0ac64ea165d0694b43fc20b33f081126?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=B9kVqMscVbatMldmJruTe4cu5ZZoxrOPcDpIO~gV6oL1HhrnY272TKEPCu72nem30Co2DoxKDkgk8bqAp8xCKs9e3Us968XnHLerVCYyMVS9HiKoZzW0XgSgjnbt0AejtpxLCR8R8YEc8sbOxlqYyvo8TqOtE3TelbX0s7CqXaanRIFVKxnlFS4YDTdzlXqfhc0LZUi96MruprXi2gSkFF1q~M7NiskD1RG6Ix3UuKLNYGRLy7hJVOBYhpIeSpORttxa5gmsfeg6Hc4HRjCU0b7t17BDDRmsWeyYjd2hY2RNd8R8jr34NxLdos1KWcqNZEtPTp75-fsMBEhFCd~1vg__",
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="services-section">
      <h2 className="services-heading">
        Our <span>Services</span>
      </h2>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`service-card ${hoveredIndex === index ? "expanded" : ""}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-content">
              <h3>{service.title}</h3>
              {hoveredIndex === index && (
                <>
                  <p>{service.description}</p>
                  {service.buttons && (
                    <div className="service-buttons">
                      <button className="btn-outline">Know More</button>
                      <button className="btn-filled">Book Now</button>
                    </div>
                  )}
                </>
              )}
            </div>
            <div className="service-arrow">{hoveredIndex === index ? "↗" : "→"}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
