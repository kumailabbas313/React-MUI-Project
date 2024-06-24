import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
// import Header from './Components/Header';
import Footer from './Components/Footer';
import Services from './Components/Services';
import './App.css';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import NotFoundPage from './Components/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
    {/* <Header/> */}
    <ResponsiveAppBar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Services' element={<Services/>}></Route>
      <Route path='/ContactUs' element={<ContactUs/>}></Route>
      <Route path="*" element={<NotFoundPage />}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  
  );
}

export default App;
