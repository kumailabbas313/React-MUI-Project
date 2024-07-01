import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../context/FormContext';
import { TestimonialContext } from '../context/TestimonialContext';
import { useCardContext } from '../context/CardContext'; // Correct hook import
import '../Styles/Home.css';
import Hero from '../Assets/Home/Hero.jpg';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material/';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import HServicesCards from '../Features/HServicesCards';
import LizardCard from '../Features/LizardCard';

const Testimonials = () => {
  const { testimonials, onSelectTestimonial, onDeleteTestimonial } = useContext(TestimonialContext);
  const navigate = useNavigate();

  const handleMouseEnter = (event) => {
    event.currentTarget.lastChild.style.display = 'flex'; // Show buttons on hover
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.lastChild.style.display = 'none'; // Hide buttons when not hovering
  };

  const handleDelete = (event, testimonial) => {
    event.stopPropagation(); // Prevents the event from bubbling up and triggering the card mouseLeave event
    onDeleteTestimonial(testimonial.text);
  };

  const handleSend = (testimonial) => {
    onSelectTestimonial(testimonial); // Set the selected testimonial
    navigate('/Services1');
  };

  return (
    <section className="testimonials">
      <Typography variant='h4' sx={{color:'red',fontWeight:'bold'}}>Testimonials</Typography>
      <div className="testimonial-cards">
        {testimonials && testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p>"{testimonial.text}"</p>
            <h4>- {testimonial.author}</h4>
            <div className="card-actions">
              <Button variant="outlined" startIcon={<DeleteIcon />} onClick={(e) => handleDelete(e, testimonial)}>Delete</Button>
              <Button variant="contained" endIcon={<SendIcon />} onClick={() => handleSend(testimonial)}>Send</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Home = () => {
  const { setFormValues } = useContext(FormContext);
  const { setCardComponent } = useCardContext(); // Correct hook usage
  const [inputValues, setInputValues] = useState({ name: '', email: '', message: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues(inputValues);
    navigate('/Services1');
  };

  useEffect(() => {
    setCardComponent(<LizardCard />); // Set the LizardCard component in context on mount
  }, [setCardComponent]);

  return (
    <div className="home">
      <section className="hero" style={{ backgroundImage: `url(${Hero})` }}>
        <h1>Welcome to Our Service</h1>
        <p>Providing the best services for you.</p>
        <button>Get Started</button>
      </section>

      <section className="services">
        <Typography variant='h4' sx={{color:'red',fontWeight:'bold'}}>Our Services</Typography>
        <HServicesCards />   
      </section>

      <section className="about">
        <Typography variant='h4' sx={{color:'red',fontWeight:'bold'}}>About Us</Typography>
        <p>Information about the service provider.</p>
        <Button variant="contained" size='small' onClick={() => {alert('clicked');}}> Hello </Button>
        <Button variant="outlined">Outlined</Button>
        <Button variant="contained" color="success">Success</Button>
      </section>

      <Testimonials />

      <section className="contact">
        <Typography variant='h4' sx={{color:'red',fontWeight:'bold'}}>Contact Us</Typography>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={inputValues.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Your Email" value={inputValues.email} onChange={handleChange} />
          <textarea name="message" placeholder="Your Message" value={inputValues.message} onChange={handleChange}></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <LizardCard />
    </div>
  );
};

export default Home;
