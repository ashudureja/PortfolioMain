import React from 'react'
import About1 from '../components/About/About1'
import About2 from '../components/About/About2'
import About3 from '../components/About/About3'
import About4 from '../components/About/About4'
import About5 from '../components/About/About5'
import About6 from '../components/About/About6'
import Abou7 from '../components/About/Abou7'
import Home3 from '../components/Home/Home3'
import Homecontact from '../components/Home/Homecontact'
import Homelast from '../components/Home/Homelast'
import Transition from '../Animations/Transition'
// import { ReactLenis, useLenis } from "lenis/react";



const About = () => {
    // const lenis = useLenis(({ scroll }) => {});
  return (
    <div className='overflow-hidden'>
       <About1/>
        <About2/>
        <About3/>
        <About4/>
        
        <About5/>
       
        {/* <About6/> */}
        <Abou7/>
         <Homecontact/>
    <Homelast page="projects"/>
        
        
    </div>
  )
}

export default About