import React from 'react'
import ParallaxImage from '../../Animations/ParallaxImage'

const About4 = () => {
  const details = [
    { label: "NAME", value: "ASHUTOSH DUREJA" },
    { label: "AGE", value: "26" },
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
      text: `Since I started this job in 2020 and up until now (2025), I've felt significant changes in technology trends and the rise of AI. As you know, this is an industry where trends change quickly, so I believe that continuing to learn is essential. I always make sure to absorb new information and apply it appropriately in my projects.`
    },
    {
      number: 2,
      title: "VALUE COMMUNICATION",
      text: `Contrary to the common perception that 'engineers don't need to be particularly good at communication,' the reality is quite different. We work closely with many people, including directors and designers, to accomplish our tasks. Instead of working alone, we work as a team and place a high value on communication.`
    },
    {
      number: 3,
      title: "ENJOY WORK",
      text: `Above all, I believe it is important to enjoy one's work. By 'enjoying,' I don't mean 'playing,' but rather maintaining a mindset that finds pleasure in creating. I think that enjoying the work often has a very positive effect on projects.`
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
          <div className="font-[lato] uppercase font-extralight 
                         text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] 
                         leading-relaxed sm:leading-[30px] md:leading-[35px] lg:leading-[40px] xl:leading-[45px]">
            I entered the web industry in 2020,<br className="hidden sm:block" /> 
            <span className="sm:hidden"> </span>studying various technologies on my own.
            <br className="hidden sm:block" /> <span className="sm:hidden"> </span>
            I'm currently working as a frontend engineer.
            <br className="hidden sm:block" /> <span className="sm:hidden"> </span>
            Besides implementation, I have an interest<br className="hidden sm:block" /> 
            <span className="sm:hidden"> </span>in design and actively create various things daily.
            <br className="hidden sm:block" /> <span className="sm:hidden"> </span>
            My motto is, "Stagnation is regression."
          </div>
          
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
                <div className="h-[1px] w-full bg-white"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="flex flex-col lg:flex-row text-[#efefef] gap-8 sm:gap-10 md:gap-12 lg:gap-14">
        {/* Left Column */}
        <div className="w-full lg:flex-[34%] font-[figtree] 
                       text-sm sm:text-base lg:text-[16px] 
                       leading-tight sm:leading-[19px]">
          (EDUCATION)
        </div>
        
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
                <div className="font-semibold mb-3 sm:mb-4 
                               text-lg sm:text-xl md:text-2xl lg:text-[24px] 
                               uppercase leading-tight sm:leading-[28px] font-[lato]">
                  {edu.degree}
                </div>
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
                <div className="h-[1px] w-full bg-white mt-6 sm:mt-8"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="flex flex-col lg:flex-row text-[#efefef] gap-8 sm:gap-10 md:gap-12 lg:gap-14">
        {/* Left Column */}
        <div className="w-full lg:flex-[34%] font-[figtree] 
                       text-sm sm:text-base lg:text-[16px] 
                       leading-tight sm:leading-[19px]">
          (VALUES)
        </div>
        
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
                <div className="font-semibold mb-3 sm:mb-4 
                               text-lg sm:text-xl md:text-2xl lg:text-[24px] 
                               leading-tight sm:leading-[28px] font-[lato]">
                  {title}
                </div>
                <div className="text-sm sm:text-base lg:text-[17px] 
                               leading-relaxed sm:leading-[27px] font-[lato] 
                               text-justify sm:text-left">
                  {text}
                </div>
                <div className="h-[1px] w-full bg-white mt-6 sm:mt-8"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About4;