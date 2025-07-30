import React from "react";
import Bracket from "../../Animations/Bracket";

const Project1 = () => {
  return (
    <div className="bg-[#efefef] w-full h-[30vh] md:h-[60vh] 
                    px-2 sm:px-6 md:px-8 lg:px-10 
                    relative flex items-center justify-center">
      
      <div className="w-full mt-8  sm:mt-8 md:mt-10">
        
        <Bracket text="PROJECTS" className="w-full items-center justify-center font-[figtree] 
                       text-[52px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] 
                       leading-tight sm:leading-[55px] md:leading-[67px] lg:leading-[81px] xl:leading-[101px] 
                       text-[#000] 
                       px-4"></Bracket>

        <div className="text-xs block md:hidden mt-2
                         tracking-tight 
                         text-center 
                         ">
           HERE IS THE LIST OF PROJECTS, <br/> I HAVE CREATED SO FAR.
          </div>
        <div className="w-full hidden   absolute bottom-0 
                       p-4 sm:p-6 md:p-8 lg:p-10 
                       right-0 sm:right-2 md:right-3 lg:right-5 
                        flex-col sm:flex-row 
                       justify-between items-center 
                       gap-4 sm:gap-0">
          
          <div className="text-xs 
                         tracking-tight  
                         order-1 sm:order-none">
           I’VE BEEN LEARNING WEB DEVELOPMENT <br/>SINCE 2024.
          </div>
          
         <div className="w-[2.1rem] h-[2.1rem] relative mr-40">
  <span className="absolute top-1/2 left-0 w-full h-px bg-black -translate-y-1/2"></span>
  <span className="absolute top-0 left-1/2 h-full w-px bg-black -translate-x-1/2"></span>
</div>

          
          <div className="text-center flex flex-col items-center justify-center sm:text-right 
                         text-xs  
                         order-2 sm:order-none">
            <div className="tracking-tight">CURRENT</div>
            <div className="font-[figtree] text-xs tracking-tight
                           mt-1">(ABOUT)</div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Project1;