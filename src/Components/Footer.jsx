import React from 'react';
import '../Styles/Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About Us</h3>
          <p>We are a leading service provider offering the best solutions for your needs.</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Services'>Services</Link></li>
            <li><Link to='/ContactUs'>ContactUs</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@AutoRobos.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com"><FaFacebook /></a>
            <a href="https://twitter.com"><FaTwitter /></a>
            <a href="https://instagram.com"><FaInstagram /></a>
            <a href="https://linkedin.com"><FaLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 AutoRobos. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
