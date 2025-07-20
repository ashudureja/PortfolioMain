import React from 'react'
import Home from './pages/Home';
import { ReactLenis, useLenis } from "lenis/react";
import Navbar from './components/Home/Navbar';

import LocomotiveScroll from 'locomotive-scroll';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Project from './pages/editorial/page';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Nav2 from './components/Home/Navbar2';

const App = () => {


const scrollRef = useRef(null);
  const containerRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  // Initialize Locomotive Scroll for v5
  useEffect(() => {
    // Preload image
    // const img = new Image();
    // img.src = "./palash2.png";
    // img.onload = () => setImagesLoaded(true);
    
    // // Initialize only when images are loaded
    // if (!imagesLoaded) return;

    
    if (!scrollRef.current) {
      scrollRef.current = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        lerp: 0.01,
        tablet: {
          smooth: true,
          breakpoint: 1024
        },
        smartphone: {
          smooth: true
        },
        reloadOnContextChange: true
      });
    }

    // Force scroll update after a brief delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.update();
      }
    }, 300);
    
    // Clean up scroll and timer
    return () => {
      clearTimeout(timer);
      if (scrollRef.current) {
        scrollRef.current.destroy();
        scrollRef.current = null;
      }
    };
  }, []);

   const getScroll = () => scrollRef.current;
    
  return (
      <>
        <Navbar />
          <Routes>
      <Route path="/" element={<Home getScroll={getScroll}/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/projects" element={<Project/>}></Route>
    </Routes>
      </>
  
  )
}

export default App