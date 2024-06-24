import React from 'react';
import '../Styles/About.css';
import team from '../Assets/About/team.jpg'; // Adjust the path if necessary
import Ratings from '../Features/Ratings';

const About = () => {
  return (
    <div className="about">
      <section className="about-intro">
        <h1>About Us</h1>
        <p>We are a dedicated team committed to providing the best services.</p>
      </section>

      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>Our mission is to deliver high-quality services that exceed our customers' expectations.</p>
      </section>

      <section className="our-vision">
        <h2>Our Vision</h2>
        <p>Our vision is to be the leading service provider in our industry, known for our commitment to quality and customer satisfaction.</p>
      </section>

      <section className="our-team">
        <h2>Our Team</h2>
        <div className="team-content">
          <img src={team} alt="Our Team" />
          <p>We have a diverse and talented team of professionals who are passionate about what they do.</p>
        </div>
      </section>

      <section style={{alignContent:'center'}}>
        <h3>Give Us Ratings</h3>
        <Ratings/>
      </section>
    </div>
  );
};

export default About;
