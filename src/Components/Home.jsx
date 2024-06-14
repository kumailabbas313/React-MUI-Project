import React from 'react';
import '../Styles/Home.css';
import Hero from '../Assets/Home/Hero.jpg'; // Adjust the path if necessary

const Home = () => {
  return (
    <div className="home">
      <section
        className="hero"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <h1>Welcome to Our Service</h1>
        <p>Providing the best services for you.</p>
        <button>Get Started</button>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Service 1</h3>
            <p>Description of service 1.</p>
          </div>
          <div className="service-card">
            <h3>Service 2</h3>
            <p>Description of service 2.</p>
          </div>
          <div className="service-card">
            <h3>Service 3</h3>
            <p>Description of service 3.</p>
          </div>
        </div>
      </section>

      <section className="about">
        <h2>About Us</h2>
        <p>Information about the service provider.</p>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"Great service!"</p>
            <h4>- Customer 1</h4>
          </div>
          <div className="testimonial-card">
            <p>"Highly recommend!"</p>
            <h4>- Customer 2</h4>
          </div>
          <div className="testimonial-card">
            <p>"Exceptional quality!"</p>
            <h4>- Customer 3</h4>
          </div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
