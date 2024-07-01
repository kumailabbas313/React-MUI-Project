import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../Styles/Header.css';
import Logo from "../Assets/Logo/Logo.png";


const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <span>ServiceProvider</span>
      </div>
      <nav className="menu">
        <ul>
          {/* Use Link components instead of <a> tags */}
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/About'>About Us</Link></li>
          <li><Link to='/Services'>Services</Link></li>
          <li><Link to='/ContactUs'>Contact Us</Link></li>
          <li><Link to='/Services1'>Services1</Link></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </header>
  );
}

export default Header;
