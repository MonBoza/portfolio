import Nav from './Nav';
import React from 'react';
import Banner from './Banner';
import About from './About';
import Projects from './Projects';
import ContactMe from './ContactMe';
import Footer from './Footer';

const App = () => {
  return (
    
    <div id="Home"className="bg-slate-900">
      <Nav/>
      <Banner/>
      <About/>
      <Projects/>
      <ContactMe/>
      <Footer/>
  
    </div>
  )}


export default App
