import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navItems = ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'];
  const [scrollPercent, setScrollPercent] = useState(0);

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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='w-full fixed top-5 px-10' style={{ zIndex: 10, mixBlendMode: 'difference' }}>
      <div className="text-white">
        <div className='flex justify-between items-center'>
          <div className='font-semibold'>logo</div>
          <div className='flex items-center justify-center gap-[36px] nav'>
            {navItems.map((item) => (
              <Link
                key={item}
                to={item === 'HOME' ? '/' : `${item.toLowerCase()}`}
                className="hover:underline transition-all hover:opacity-80"
              >
                ({item})
              </Link>
            ))}
          </div>
          <div className='w-10 text-end'>
            <p className='font-medium'>{scrollPercent}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;