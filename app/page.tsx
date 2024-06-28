import React from 'react';
import NavBar from "./components/NavBar";
import HeroPage from "./components/HeroPage";
import HeadFooter from './components/HeadFooter';



import Do from './components/Do';
import HowItWorks from './components/HowItWorks';



export default function Home() {
  return (
    <div>
      
      <div className="bg-custom">
      <NavBar />
      
        <HeroPage/>
        <HeadFooter/>
        </div>
        
       <Do/>
       <HowItWorks/>
       
       
       

               </div>
      
        
      
      
   
  );
}
