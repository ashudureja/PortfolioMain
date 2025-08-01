import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';

import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/editorial/page';
import Navbar from './components/Home/Navbar';
import Contact from './pages/Contact';
import Contact2 from './pages/Contact2';
import Mobilemenu from './components/Home/Mobilemenu';

const App = () => {
  
  const location = useLocation();
   
   useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Optional: Initialize LocomotiveScroll once
  useEffect(() => {
    const scroll = new LocomotiveScroll();
    
  }, []);

  // Page transition variants
  const pageVariants = {
    initial: { opacity: 0, },
    animate: { opacity: 1, transition: { duration: 0.5, ease: 'circOut' } },
    exit: { opacity: 1,  transition: { duration: 0, ease: 'easeIn' } }
  };

  const MotionWrapper = ({ children }) => (
    <motion.div
      key={location.pathname}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );

  return (
    <>
      <Navbar classname="hidden md:block"/>
      <Mobilemenu classname="block md:hidden"/>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MotionWrapper><Home /></MotionWrapper>} />
          <Route path="/about" element={<MotionWrapper><About /></MotionWrapper>} />
          <Route path="/projects" element={<MotionWrapper><Project /></MotionWrapper>} />
          <Route path="/contact" element={<MotionWrapper><Contact /></MotionWrapper>} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
