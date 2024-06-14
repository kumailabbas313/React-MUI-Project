import React from 'react';
import Contacthero from '../Assets/Contact/Contacthero.jpg'; // Import the background image
import '../Styles/ContactUs.css'; // Import CSS for styling

const ContactUs = () => {
  return (
    <div className="contact-us">
      <section
        className="hero"
        style={{ backgroundImage: `url(${Contacthero})` }} // Use background image for hero section
      >
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you!</p>
        </div>
      </section>
      
      <section className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
