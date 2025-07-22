import React from "react";
import ParallaxImage from "../../Animations/ParallaxImage";
import Copy from "../../Animations/Copy";
import Bracket from "../../Animations/Bracket";

const Home2 = () => {
  return (
    <div
      data-navbar-theme="dark"
      className="h-screen   md:h-[120vh] flex flex-col justify-between relative w-full p-4 sm:p-6 md:p-8 lg:p-10"
    >
      <div className="inset-0 absolute z-[-10]">
        <ParallaxImage speed={0.4} className="" src="./images/aboutbg3.png"></ParallaxImage>
      </div>
      <div className="absolute z-[-1] bg-black/35 inset-0"></div>

      {/* Top section */}
      <div className="justify-between flex items-center text-white">
        <span className="!text-white text-[20px] sm:text-[25px] md:text-[30px] font-extralight">
          +
        </span>
        <div className="font-[lato] text-xs sm:text-sm md:text-base lg:text-lg text-center">
          FRONTEND DEVELOPER
        </div>
        <span className="!text-white text-[20px] sm:text-[25px] md:text-[30px] font-extralight">
          +
        </span>
      </div>

      {/* Middle section */}
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-24 lg:gap-48 justify-center items-center lg:items-start">
        {/* <span className="uppercase text-sm sm:text-base md:text-lg !font-[figtree] text-white text-center lg:text-left">
          (About)
        </span> */}
        <Bracket text="About" className="uppercase text-sm sm:text-base md:text-lg !font-[figtree] text-white text-center lg:text-left"></Bracket>
        <div className="flex flex-col text-center lg:text-left max-w-4xl">
          <Copy>
            <p className="uppercase whitespace-nowrap text-[16px] sm:text-xl md:text-2xl lg:text-[32px] leading-tight sm:leading-relaxed md:leading-[30px] font-[figtree] text-white">
              Hi, I’m Ashutosh Dureja — a frontend developer.
              <br />
              I specialize in modern development
              <br />
              and interactive animations.
              <br />
              Above all, I’m passionate about what I do.
            </p>
          </Copy>
        </div>
      </div>

      {/* Bottom section */}
      <div className="justify-between flex items-center text-white">
        <span className="!text-white text-[20px] sm:text-[25px] md:text-[30px] font-extralight">
          +
        </span>
        <div className="text-xs sm:text-sm md:text-base lg:text-lg text-center">
          FRONTEND DEVELOPER
        </div>
        <span className="!text-white text-[20px] sm:text-[25px] md:text-[30px] font-extralight">
          +
        </span>
      </div>
    </div>
  );
};

export default Home2;
