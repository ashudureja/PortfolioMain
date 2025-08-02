import React from "react";
import Bracket from "../../Animations/Bracket";

const About1 = () => {
  return (
    <div className="bg-[#efefef] w-full h-[20vh] md:h-[40vh] 
                    px-4 sm:px-6 md:px-8 lg:px-10 
                    relative flex items-center justify-center">
      
      <div className="w-full mt-4  sm:mt-8 md:mt-10">
        
       <Bracket text="ABOUT" className="tracking-[-4px] items-center justify-center md:mt-0  md:tracking-[-9px] text-center md:text-left font-[figtree] text-[70px] sm:text-[120px] md:text-[150px] lg:text-[160px] leading-[0.9]  "></Bracket>

        {/* <div className="text-xs block md:hidden mt-2
                         tracking-tight 
                         text-center 
                         ">
           I’VE BEEN LEARNING WEB DEVELOPMENT <br/> SINCE 2024.
          </div> */}
        <div className="w-full hidden  absolute bottom-0 
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

export default About1;