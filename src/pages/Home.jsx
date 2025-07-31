import React, { useState } from "react";
import Main from "../components/Home/Main";
import Home2 from "../components/Home/Home2";
import Home3 from "../components/Home/Home3";
import Home4 from "../components/Home/Home4";
import Home5 from "../components/Home/Home5";
import Homecontact from "../components/Home/Homecontact";
import Homelast from "../components/Home/Homelast";
import { useEffect } from "react";
import Transition from "../Animations/Transition";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pages = ["HOME", "ABOUT", "ARCHIVE", "CONTACT"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="overflow-hidden max-w-8xl mx-auto relative">
      <Main />
      <Home2 />
      <Home3 />
      <Home4 />
      <Home5 />
      <Homecontact />
      <Homelast page="about" />
      
      {/* Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Background Overlay */}
         
          
          {/* Menu Content */}
          <div className="fixed inset-0 z-50 flex items-end justify-center pb-20 p-4">
            <div className="bg-black text-white w-55 h-70 flex flex-col items-center justify-between py-6 pb-9 px-8 rounded-xl shadow-2xl">
              {/* Close Icon (Plus/Cross) */}
              <div 
                className="cursor-pointer text-2xl font-thin hover:opacity-70 transition-opacity"
                onClick={toggleMenu}
              >
                +
              </div>
              
              {/* Navigation Items */}
              <div className="flex flex-col items-center space-y-4">
                {pages.map((item, i) => (
                  <div 
                    key={i}
                    className="text-base font-normal tracking-wide cursor-pointer hover:opacity-70 transition-opacity text-gray-300"
                    onClick={() => {
                      // Handle navigation here
                      console.log(`Navigate to ${item}`);
                      setIsMenuOpen(false);
                    }}
                  >
                    ({item})
                  </div>
                ))}
              </div>
              
              
            </div>
          </div>
        </>
      )}

      {/* Menu Trigger Button - Fixed at bottom */}
      <div className="fixed bottom-5 w-full items-center justify-center flex flex-col">
        <button 
          className="bg-black text-white rounded-full py-2 px-8 hover:bg-gray-800 transition-colors duration-300"
          onClick={toggleMenu}
        >
          {isMenuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>
    </div>
  );
};

export default Home;