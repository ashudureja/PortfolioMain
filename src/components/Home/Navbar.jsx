import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const navItems = ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'];
  const [scrollPercent, setScrollPercent] = useState(0);
  const location = useLocation();
      
      const pathname=location.pathname

  const handleScroll = () => {
 
 
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    const totalScroll = docHeight - windowHeight;

    if (totalScroll <= 0) {
      setScrollPercent(0);
      return;
    }

    const scroll = (scrollTop / totalScroll) * 100;
    setScrollPercent(Math.min(100, Math.round(scroll)));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    handleScroll(); // Recalculate on route change
  }, [location]);


   useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return (
    <div className='w-full fixed top-5 z-[999] px-10 flex justify-between items-center'>
      <div>logo</div>

      <div className='flex gap-[36px] nav'>
        {navItems.map((item) => (
          <Link
            key={item}
            to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
            className='hover:underline'
          >
            ({item})
          </Link>
        ))}
      </div>

      <div>
        <p>{scrollPercent}%</p>
      </div>
    </div>
  );
};

export default Navbar;
