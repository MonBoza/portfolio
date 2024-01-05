import '../App.css';
import Header from './Header';
// import SideNav from './SideNav'
import Nav from './Nav';
import React from 'react';
import Banner from './Banner';
import About from './About';

function App() {

  return (
    <div className="bg-slate-900">
      <Nav/>
      <Banner/>
      <About/>
  
    </div>
  )}


export default App
