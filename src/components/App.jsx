
import Header from './Header';
import Nav from './Nav';
import React from 'react';
import Banner from './Banner';
import About from './About';
import Projects from './Projects';
import ContactMe from './ContactMe';


function App() {

  return (
    
    <div className="bg-slate-900">
      <Nav/>
      <Banner/>
      <About/>
      <Projects/>
      <ContactMe/>
  
    </div>
  )}


export default App
