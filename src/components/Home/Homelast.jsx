import React from "react";
import Bracket from "../../Animations/Bracket";
import { Link } from "react-router-dom";

const Homelast = ({ page }) => {
  return (
    <div
      className="h-screen w-full 
                    px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px] 
                    py-4 sm:py-5 md:py-[20px] 
                    flex flex-col justify-between 
                    bg-[#efefef]"
    >
      <div className="flex justify-between items-start">
         <span className="!text-black  text-[20px] sm:text-[25px] md:text-[30px] font-extralight">
          +
        </span>
         <span className="!text-black  text-[20px] sm:text-[25px] md:text-[30px] font-extralight">
          +
        </span>
      </div>

      <div className="flex flex-col relative items-center justify-center">
        <div className="relative group cursor-pointer inline-block">
          <Link to={`/${page}`}>
            {" "}
            <Bracket
              text="NEXT"
              className="items-center justify-center font-[figtree]
      text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px]
      leading-tight sm:leading-[44px] md:leading-[54px] lg:leading-[64px] xl:leading-[74px]
      text-[#000]
      px-4"
            />{" "}
          </Link>
          <span className="absolute bottom-0 left-4 w-0 h-px bg-black transition-all duration-500 ease-out group-hover:w-[calc(100%-2rem)]"></span>
        </div>
      </div>

      <div className="flex justify-between items-end">
        <span className="!text-black  text-[20px] sm:text-[25px] md:text-[30px] font-extralight">
          +
        </span>

        <div
          className="font-[lato] 
                       leading-tight sm:leading-[10px] md:leading-[12px] 
                       uppercase 
                       text-[8px] sm:text-[9px] md:text-[10px] 
                       text-[#000] 
                       text-center 
                       px-2 sm:px-4"
        >
          ©2025 ASHU DUREJA. All rights reserved.
        </div>

        <span className="!text-black  text-[20px] sm:text-[25px] md:text-[30px] font-extralight">
          +
        </span>
      </div>
    </div>
  );
};

export default Homelast;
