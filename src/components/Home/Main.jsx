import React from "react";
import Navbar from "./Navbar";
import Bracket from "../../Animations/Bracket";

const Main = () => {
  return (
    <div data-navbar-theme="light" className="min-h-screen w-full bg-[#efefef] px-4 md:px-0 md:pl-[14px]">
      <div className="flex flex-col md:grid md:grid-cols-2">
        {/* Left Column - Content */}
        <div className="md:col-span-1 flex flex-col justify-between  md:pt-0">
          <div>
            {/* <div className="tracking-[-4px] mt-20 sm:mt-25 md:mt-20  md:tracking-[-9px] text-center md:text-left font-[figtree] text-[80px] sm:text-[120px] md:text-[150px] lg:text-[206px] leading-[0.9]">
              (ASHU)
            </div> */}
            <Bracket text="ASHU" className="tracking-[-4px] mt-20 sm:mt-25 md:mt-20  md:tracking-[-9px] text-center md:text-left font-[figtree] text-[80px] sm:text-[120px] md:text-[150px] lg:text-[206px] leading-[0.9] items-center justify-center md:items-start md:justify-start"></Bracket>
          </div>
          
          <div className="flex flex-col md:flex-row items-start gap-6 md:items-center mb-7 md:gap-40 mt-10 md:mt-0">
            <div className="flex hidden md:block flex-col">
              <div className="text-[10px] leading-[11.5px]">CURRENT</div>
              <div className="text-[10px]">(HOME)</div>
            </div>
            
            <div className="flex flex-col text-[12px]  leading-[14.8px] w-full text-center md:text-left  uppercase md:max-w-[300px] ">
              <div>I started working as frontend engineer.</div>
              <div>I take pride in this role.</div>
            </div> 
          </div>
        </div>
        
        {/* Right Column - Image */}
        <div className="md:col-span-1 h-auto  sm:mb-[14px] md:mb-0 md:h-[100vh] w-full mt-8 md:mt-0">
          <img 
            className="w-full h-full object-cover object-center" 
            src="./images/ashu2.jpg" 
            alt="Ashu"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;