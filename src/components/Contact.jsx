import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Profile</h2>
      <p>Surya Prakash V</p>

      <div className="contact-details">
        <p><strong>Email:</strong> suryaprakash26102004@gmail.com</p>
        <p><strong>Phone:</strong> +91 9095320668</p>
        <p><strong>Location:</strong> ganapathy , coimbatore,tamilnadu</p>
        <a
          className="whatsapp-button"
          href="https://wa.me/9095320668"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;
