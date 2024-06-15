import React from 'react';
import NavBar from "./components/NavBar";
import HeroPage from "./components/HeroPage";
import HeadFooter from './components/HeadFooter';
import Project from './components/Project';
import Portf from './components/Portf';
import Subscribe from './components/Subscribe';
import Testimonial from './components/Testimonial';
import Slide from './components/Slide';

import Do from './components/Do';


export default function Home() {
  return (
    <div>
      
      <div className="bg-custom">
      <NavBar />
      
        <HeroPage/>
        <HeadFooter/>
        </div>
        
       <Do/>
       <Project/>
       <Portf/>
       <Slide/>
       <Testimonial/>
       <Subscribe/>

               </div>
      
        
      
      
   
  );
}
