import React from 'react'
import ParallaxImage from '../../Animations/ParallaxImage'
import Line from '../../Animations/Line';
import { circOut, motion } from "framer-motion";
import Bracket from '../../Animations/Bracket';
import Copy from '../../Animations/Copy';

const About4 = () => {
  const details = [
    { label: "NAME", value: "ASHUTOSH DUREJA" },
    { label: "AGE", value: "27" },
    { label: "BASED", value: "SYDNEY" },
    { label: "ROLE", value: "FRONTEND DEVELOPER" },
  ];

  const educationData = [
    {
      degree: "Masters of Information Technology",
      institution: "Kaplan Business School, Sydney",
      duration: "[2023 - 2025]",
      details: "Specialized in Web Development with distinction honors.",
    },
    {
      degree: "Bachelor of Instrumentation Engineering",
      institution: "NIT, Jalandhar",
      duration: "[2018 - 2022]",
      details:
        "Focused on Instrumentation Systems, Control Engineering, and Human-Machine Interfaces.",
    },
  ];

  const values = [
  {
    number: 1,
    title: "KEEP LEARNING",
    text: `As someone entering the tech industry, I know that continuous learning is key. I'm constantly exploring new tools, frameworks, and trends to stay ahead. Whether it's improving my React skills or diving into design systems, I'm always looking to grow and improve my craft.`
  },
  {
    number: 2,
    title: "VALUE COMMUNICATION",
    text: `Even as a fresher, I understand that great products are built through collaboration. I'm always open to feedback and believe that clear, respectful communication leads to better teamwork and better outcomes. I'm eager to work in environments where ideas can be shared freely.`
  },
  {
    number: 3,
    title: "ENJOY CREATING",
    text: `I genuinely enjoy building and designing things for the web. For me, it's exciting to turn ideas into something interactive and meaningful. That passion keeps me motivated, especially when solving challenges or learning something new.`
  }
];


  return (
    <div className="min-h-screen flex flex-col 
                    gap-24 sm:gap-32 md:gap-40 lg:gap-48 xl:gap-[200px] 
                    w-full 
                    py-16 sm:py-24 md:py-32 lg:py-40 xl:py-[200px] 
                    px-4 sm:px-6 md:px-8 lg:px-10 
                    bg-[#111111]">
      
      {/* Detail Section */}
      <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-14 text-[#efefef]">
        {/* Left Column */}
        <div className="w-full lg:flex-[34%] lg:h-120 overflow-hidden font-[figtree] 
                       text-sm sm:text-base lg:text-[16px] 
                       leading-tight sm:leading-[19px]">
          <div className="font-[figtree] mb-3 sm:mb-4 
                         text-sm sm:text-base lg:text-[16px] 
                         leading-tight sm:leading-[19px]">
            (DETAIL)
          </div>
          <img src="./images/ashu3.jpg" className="w-full h-auto max-w-sm lg:max-w-none"/>
        </div>
        
        {/* Right Column */}
        <div className="flex w-full lg:flex-[66%] flex-col gap-8 sm:gap-10 md:gap-12">
         <Copy>
  <div className="font-[lato] md:block hidden whitespace-nowrap uppercase font-extralight 
                text-[16px] sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] 
                leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] xl:leading-[45px]">
    I’m Ashutosh Dureja, a 27-year-old developer<br className="hidden sm:block" /> 
    <span className="sm:hidden"> </span>and designer based in Sydney.Currently
    <br className="hidden sm:block" /> <span className="sm:hidden"> </span>
     pursuing a Master’s in IT. I build responsive
    <br className="hidden sm:block" /> <span className="sm:hidden"> </span>
     sites with smooth and elegant interactions. <br className="hidden sm:block" /> 
    <span className="sm:hidden"> </span>  I love  using React, Tailwind CSS,GSAP and
    <br className="hidden sm:block" /> <span className="sm:hidden"> </span>
   Framer Motion daily.<br className="hidden sm:block" /> 
    <span className="sm:hidden"> </span>
  </div> 


  <div className="font-[lato] block md:hidden whitespace-nowrap uppercase font-extralight 
                text-[17px] sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] 
                leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] xl:leading-[45px]">
    I’m Ashutosh Dureja, a 27-year-old <br  />  developer
  and designer based in <br  /> Sydney.Currently
   
     pursuing a Master’s <br  /> in IT. I build responsive
  
     sites with <br  /> smooth and elegant interactions.<br  /> 
     I love  using React, Tailwind CSS,GSAP<br  /> and
  
   Framer Motion daily.
   
  </div> 
</Copy>


          
          {/* Details Section */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {details.map((item, index) => (
              <div key={index} className="flex flex-col gap-3 sm:gap-4">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 md:gap-12 lg:gap-16 xl:gap-24 
                               font-[lato] text-xs sm:text-sm lg:text-[14px] 
                               leading-tight sm:leading-[16px]">
                  <div className="w-full sm:w-[120px] font-medium opacity-80">{item.label}</div>
                  <div className="break-words">{item.value}</div>
                </div>
                <motion.div
        className="h-[1px] bg-gray-200 rounded-full "
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{
          duration: 1,
          delay: 0.1,
          ease: circOut,
        }}
        viewport={{ once: true }}
      />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="flex flex-col lg:flex-row text-[#efefef] gap-8 sm:gap-10 md:gap-12 lg:gap-14">
        {/* Left Column */}
        {/* <div className="w-full lg:flex-[34%] font-[figtree] 
                       text-sm sm:text-base lg:text-[16px] 
                       leading-tight sm:leading-[19px]">
          (EDUCATION)
        </div> */}

<Bracket text="EDUCATION" className="w-full lg:flex-[34%] font-[figtree] 
                       text-sm sm:text-base lg:text-[16px] 
                       leading-tight sm:leading-[19px]"></Bracket>        
        {/* Right Column */}
        <div className="flex w-full lg:flex-[66%] flex-col text-[#efefef] gap-8 sm:gap-10 md:gap-12">
          {/* Education Details */}
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14 text-[#efefef]">
            {educationData.map((edu, index) => (
              <div key={index}>
                <div className="mb-3 sm:mb-4 text-xs sm:text-sm lg:text-[14px] 
                               leading-tight sm:leading-[16px] font-[lato]">
                  ({index + 1})
                </div>
               <Copy> <div className="font-semibold whitespace-nowrap mb-3 sm:mb-4 
                               text-lg sm:text-xl md:text-2xl lg:text-[24px] 
                               uppercase leading-tight sm:leading-[28px] font-[lato]">
                  {edu.degree}
                </div></Copy>
                <div className="text-sm sm:text-base lg:text-[17px] 
                               leading-relaxed sm:leading-[27px] font-[lato] mb-2">
                  {edu.institution}
                </div>
                <div className="text-xs sm:text-sm lg:text-[14px] 
                               leading-tight sm:leading-[16px] font-[lato] mb-3 sm:mb-4 opacity-80">
                  {edu.duration}
                </div>
                <div className="text-sm sm:text-base lg:text-[17px] 
                               leading-relaxed sm:leading-[27px] font-[lato]">
                  {edu.details}
                </div>
                {/* <div className="h-[1px] w-full bg-white mt-6 sm:mt-8"></div> */}
                <motion.div
        className="h-[1px] bg-gray-200 rounded-full mt-6 sm:mt-8"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{
          duration: 1,
          delay: 0.1,
          ease: circOut,
        }}
        viewport={{ once: true }}
      />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="flex flex-col lg:flex-row text-[#efefef] gap-8 sm:gap-10 md:gap-12 lg:gap-14">
        {/* Left Column */}
        {/* <div className="w-full lg:flex-[34%] font-[figtree] 
                       text-sm sm:text-base lg:text-[16px] 
                       leading-tight sm:leading-[19px]">
          (VALUES)
        </div> */}
        <Bracket text="VALUES"  className="w-full lg:flex-[34%] font-[figtree] 
                       text-sm sm:text-base lg:text-[16px] 
                       leading-tight sm:leading-[19px]" />
        
        {/* Right Column */}
        <div className="flex w-full lg:flex-[66%] flex-col text-[#efefef] gap-8 sm:gap-10 md:gap-12">
          {/* Values Details */}
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-14 text-[#efefef]">
            {values.map(({ number, title, text }) => (
              <div key={number}>
                <div className="mb-3 sm:mb-4 text-xs sm:text-sm lg:text-[14px] 
                               leading-tight sm:leading-[16px] font-[lato]">
                  ({number})
                </div>
                <Copy><div className="font-semibold whitespace-nowrap mb-3 sm:mb-4 
                               text-lg sm:text-xl md:text-2xl lg:text-[24px] 
                               leading-tight sm:leading-[28px] font-[lato]">
                  {title}
                </div></Copy>
                
                <div className="text-sm sm:text-base lg:text-[17px] 
                               leading-relaxed sm:leading-[27px] font-[lato] 
                               text-justify sm:text-left">
                  {text}
                </div>
                <motion.div
        className="h-[1px] bg-gray-200 rounded-full mt-6 sm:mt-8"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{
          duration: 1,
          delay: 0.1,
          ease: circOut,
        }}
        viewport={{ once: true }}
      />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About4;