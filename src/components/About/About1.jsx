import React from "react";
import Bracket from "../../Animations/Bracket";

const About1 = () => {
  return (
    <div className="bg-[#efefef] w-full h-[35vh] md:h-[60vh] 
                    px-4 sm:px-6 md:px-8 lg:px-10 
                    relative flex items-center justify-center">
      
      <div className="w-full mt-6 sm:mt-8 md:mt-10">
        {/* <div className="w-full text-center font-[figtree] 
                       text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] 
                       leading-tight sm:leading-[55px] md:leading-[67px] lg:leading-[81px] xl:leading-[101px] 
                       text-[#000] 
                       px-4">
          (ABOUT)
        </div> */}
        <Bracket text="ABOUT" className="w-full items-center justify-center font-[figtree] 
                       text-6xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] 
                       leading-tight sm:leading-[55px] md:leading-[67px] lg:leading-[81px] xl:leading-[101px] 
                       text-[#000] 
                       px-4"></Bracket>
        
        <div className="w-full hidden  absolute bottom-0 
                       p-4 sm:p-6 md:p-8 lg:p-10 
                       right-0 sm:right-2 md:right-3 lg:right-5 
                       flex flex-col sm:flex-row 
                       justify-between items-center 
                       gap-4 sm:gap-0">
          
          <div className="text-xs sm:text-sm md:text-base 
                         font-medium tracking-wide 
                         order-1 sm:order-none">
            FRONTEND DEVELOPER
          </div>
          
          <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                         font-extralight 
                         mr-0 sm:mr-4 md:mr-6 lg:mr-10 
                         order-3 sm:order-none 
                         hidden sm:block">
            +
          </div>
          
          <div className="text-center sm:text-right 
                         text-xs sm:text-sm md:text-base 
                         order-2 sm:order-none">
            <div className="font-medium tracking-wide">CURRENT</div>
            <div className="font-[figtree] text-sm sm:text-base md:text-lg 
                           mt-1">(ABOUT)</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About1;