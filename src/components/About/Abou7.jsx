import React from "react";
import Copy from "../../Animations/Copy";
import Bracket from "../../Animations/Bracket";

const Abou7 = () => {
  return (
    <div className=" min-h-screen md:h-[130vh] w-full text-[#EFEFEF] bg-[#111111] flex flex-col gap-6 md:gap-8 lg:gap-10 items-center justify-center px-4 py-16 md:py-12 lg:py-20">
      {/* <div className="font-[figtree] text-sm md:text-base font-light">
        (HOBBIES)
      </div> */}
      <Bracket text="HOBBIES" className="font-[figtree] text-sm md:text-base font-light items-center justify-center" ></Bracket>

      <div className="flex flex-col hidden md:block text-[#EFEFEF] items-center justify-center uppercase font-[lato] text-lg md:text-2xl lg:text-[32px] leading-tight md:leading-relaxed lg:leading-[37px] text-center ">
       <Copy>
         <p className="text-[#efefef] whitespace-nowrap">
          Outside of creating websites, I enjoy staying active at the gym,
          <br />
          diving into exciting anime series during my free time,
          <br />
          and playing cricket with friends.
        </p>
       </Copy>
      </div>
      <div className="flex flex-col block md:hidden text-[#EFEFEF] items-center justify-center uppercase font-[lato] text-[16px] md:text-2xl lg:text-[32px] leading-tight md:leading-relaxed lg:leading-[37px] text-center ">
       <Copy>
         <p className="text-[#efefef] whitespace-nowrap">
          Outside of creating websites, I enjoy <br /> staying active at the gym,
          
          diving <br /> into exciting anime  series  during <br />my free time,
          
          and  playing <br />cricket with friends.
        </p>
       </Copy>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-4 items-center justify-center mt-6 md:mt-8 lg:mt-1 w-full max-w-6xl">
        <div className="w-full max-w-[310px] md:max-w-[300px] lg:max-w-[338px] aspect-[338/408] md:mt-0 lg:mt-0">
          <img
            src="./images/bb1.jpg"
            alt="Hobby activity 1"
            className="w-full h-full object-cover "
          />
        </div>

        <div className="w-full max-w-[310px] md:max-w-[300px] lg:max-w-[338px] aspect-[338/408]">
          <img
            src="./images/bb2.JPG"
            alt="Hobby activity 2"
            className="w-full h-full object-cover "
          />
        </div>

        <div className="w-full max-w-[310px] md:max-w-[300px] lg:max-w-[338px] aspect-[338/408] md:mt-0 lg:mt-0">
          <img
            src="./images/bb3.JPG"
            alt="Hobby activity 3"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Abou7;
