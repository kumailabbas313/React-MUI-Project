// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Services from './Components/Services';
import Services1 from './Components/Services1';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import NotFoundPage from './Components/NotFoundPage';
import { TestimonialProvider } from './context/TestimonialContext';
import { FormProvider } from './context/FormContext';
import { CardProvider } from './context/CardContext';

function App() {
  return (
    <TestimonialProvider>
      <FormProvider>
        <CardProvider>
          <BrowserRouter>
            <ResponsiveAppBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/Services1" element={<Services1 />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CardProvider>
      </FormProvider>
    </TestimonialProvider>
  );
}

export default App;
