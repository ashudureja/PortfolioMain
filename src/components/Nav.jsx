import React, { useEffect, useState } from 'react';
// 1. Import useNavigate instead of Link
import { useLocation, useNavigate } from 'react-router-dom';


const Nav = () => {
  const navItems = ['HOME', 'ABOUT', 'PROJECTS', 'CONTACT'];
  const [scrollPercent, setScrollPercent] = useState(0);
  const location = useLocation();
  const navigate = useNavigate(); // 2. Initialize the navigate function

  // This is the animation function, copied directly from your Next.js example
  const slideInOut = () => {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: 'translateY(0)',
        },
        {
          opacity: 1,
          transform: 'translateY(-65%)',
        },
      ],
      {
        duration: 1500,
        easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
        fill: 'forwards',
        pseudoElement: '::view-transition-old(root)',
      }
    );

    document.documentElement.animate(
      [
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        },
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        },
      ],
      {
        duration: 1500,
        easing: 'cubic-bezier(0.87, 0, 0.13, 1)',
        fill: 'forwards',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  };

  // 3. Create a handler to trigger the transition
  const handleNavigation = (e, to) => {
    e.preventDefault();

    // Check if the browser supports the View Transitions API
    if (!document.startViewTransition) {
      // Fallback for browsers that don't support the API
      navigate(to);
      return;
    }

    // Start the view transition
    const transition = document.startViewTransition(() => {
      navigate(to);
    });

    // Run the custom animation once the transition is ready
    transition.ready.then(slideInOut);
  };

  // --- Your existing useEffect hooks remain the same ---
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

  useEffect(() => {
    handleScroll();
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className='w-full fixed top-5 z-[999] px-10 flex justify-between items-center'>
      <div>logo</div>

      <div className='flex gap-[36px] nav'>
        {navItems.map((item) => {
          const path = item === 'HOME' ? '/' : `/${item.toLowerCase()}`;
          return (
            // 4. Use an <a> tag with the onClick handler
            <a
              key={item}
              href={path}
              onClick={(e) => handleNavigation(e, path)}
              className='hover:underline cursor-pointer'
            >
              ({item})
            </a>
          );
        })}
      </div>

      <div>
        <p>{scrollPercent}%</p>
      </div>
    </div>
  );
};

export default Nav;