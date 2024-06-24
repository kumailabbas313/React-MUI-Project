import React from 'react';
import '../Styles/Home.css';
import Hero from '../Assets/Home/Hero.jpg';
import Button from '@mui/material/Button'; //buttonMUI
import{Typography} from '@mui/material/'; //typography
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import HServicesCards from '../Features/HServicesCards';



const Home = () => {
  return (
    <div className="home">
      <section
        className="hero"
        style={{ backgroundImage: `url(${Hero})` }}>
        <h1>Welcome to Our Service</h1><p>Providing the best services for you.</p><button>Get Started</button>
      </section>

      <section className="services">
        <Typography variant='h4' sx={{color:'red',fontWeight:'bold'}}>Our Services</Typography>
        <HServicesCards/>
      </section>

      <section className="about">
      <Typography variant='h4' sx={{color:'red',fontWeight:'bold'}}>About Us</Typography>
        <p>Information about the service provider.</p>
        <Button variant="contained" size='small' onClick={() => {alert('clicked');}} > Hello </Button>;
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained" color="success">Success</Button>
      </section>

      <section className="testimonials">
      <Typography variant='h4' sx={{color:'red',fontWeight:'bold'}}>Testimonial</Typography>
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
        <Button variant="outlined" startIcon={<DeleteIcon/>}>Delete</Button>
        <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
      </section>

      <section className="contact">
      <Typography variant='h4' sx={{color:'red',fontWeight:'bold'}}>Contact Us</Typography>
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
