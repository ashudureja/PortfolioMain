import React from "react";
import Copy from "../../Animations/Copy";
import ParallaxImage from "../../Animations/ParallaxImage";
import Bracket from "../../Animations/Bracket";

const Home3 = () => {
  return (
    <div
      data-navbar-theme="dark"
      className="md:min-h-screen h-[90vh] w-full  text-[#EFEFEF] bg-[#111111] flex flex-col gap-6 sm:gap-8 md:gap-10 items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-12 lg:py-26"
    >
      {/* Technology label */}


      {/* <div className="font-[figtree] text-[12px]  sm:text-[14px] md:text-[16px] font-light">
        (TECHNOLOGY)
      </div> */}

      



      <Bracket
        text="TECHNOLOGY"
        className="font-[figtree] text-[12px] sm:text-[14px] md:text-[16px] font-light "
      ></Bracket>

      {/* Main content text */}
      <div className="flex font-[lato] uppercase text-[15px] sm:text-[22px] md:text-[28px] lg:text-[32px] leading-[1.2] sm:leading-[1.15] md:leading-[0.92] flex-col text-[#EFEFEF] items-center justify-center text-center max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-none">
        <Copy>
          <p className="text-[#efefef] hidden md:block mb-2 sm:mb-4 whitespace-nowrap">
            I am currently continuing my studies, focusing on technologies{" "}
            <br /> that enhance web-based expression. I’m skilled in React,
            <br /> JavaScript,Tailwind CSS, and various other tools <br /> , and
            I plan to further develop and <br /> refine these skills.
          </p>
          <p className="text-[#efefef] mb-2 sm:mb-4 whitespace-nowrap md:hidden block">
            I'm continuing my studies, focusing on <br /> web-based expression.
            Skilled in <br /> React, JavaScript , Tailwind CSS
            <br />
            and other tools.
          </p>
        </Copy>
      </div>

      {/* Image container */}
      <div className="w-[250px] h-[300px] sm:w-[280px] sm:h-[336px] md:w-[320px] md:h-[384px] lg:w-[338px] lg:h-[408px] overflow-hidden">
        <img
          // speed={0.07}
          src="./images/ashu8.jpg"
          alt="Technology focus"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Skills/Technologies */}
      <div className="max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-none text-center">
        <div className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-[#efefef] font-medium tracking-wide">
          REACT/JAVASCRIPT/TAILWIND CSS/HTML5/GSAP
        </div>
      </div>
    </div>
  );
};

export default Home3;
