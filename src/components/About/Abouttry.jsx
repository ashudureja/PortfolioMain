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
    <div className="min-h-screen flex flex-col gap-[200px] w-full py-[200px] px-10 bg-[#111111]">
      <div className="flex gap-14 text-[#efefef]">
        {/* Left Column */}
        <div className="flex-[34%] h-120 overflow-hidden font-[figtree] text-[16px] leading-[19px]">
          <div className="flex-[34%] font-[figtree] mb-4 text-[16px] leading-[19px]">
            (DETAIL)
          </div>
          <img src="./images/ashu3.jpg"></img>
        </div>
        {/* Right Column */}
        <div className="flex flex-[66%] flex-col gap-12">
          <div className="font-[lato] uppercase font-extralight text-[32px] leading-[45px]">
            I entered the web industry in 2020,<br /> studying various technologies
            on my own.<br /> I'm currently working as a frontend engineer.<br /> Besides
            implementation, I have an interest<br /> in design and actively create
            various things daily.<br /> My motto is, "Stagnation is regression."
          </div>
          {/* Details Section */}
          <div className="flex flex-col gap-4">
            {details.map((item, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className="flex gap-24 font-[lato] text-[14px] leading-[16px] ">
                  <div className="w-[120px]">{item.label}</div>
                  <div>{item.value}</div>
                </div>
                <div className="h-[0.1px] w-full bg-white"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="flex text-[#efefef] gap-14">
        {/* Left Column */}
        <div className="flex-[34%] font-[figtree] text-[16px] leading-[19px]">
          (EDUCATION)
        </div>
        {/* Right Column */}
        <div className="flex flex-[66%] flex-col text-[#efefef] gap-12">
          {/* Education Details */}
          <div className="flex flex-col gap-14 text-[#efefef]">
            {educationData.map((edu, index) => (
              <div key={index}>
                <div className="mb-4 text-[14px] leading-[16px] font-[lato]">({index + 1})</div>
                <div className="font-semibold mb-4 text-[24px] uppercase leading-[28px] font-[lato]">{edu.degree}</div>
                <div className="text-[17px] leading-[27px] font-[lato] mb-2">{edu.institution}</div>
                <div className="text-[14px] leading-[16px] font-[lato] mb-4 opacity-80">{edu.duration}</div>
                <div className="text-[17px] leading-[27px] font-[lato]">{edu.details}</div>
                <div className="h-[0.1px] w-full bg-white mt-8"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex text-[#efefef] gap-14">
        {/* Left Column */}
        <div className="flex-[34%] font-[figtree] text-[16px] leading-[19px]">
          (VALUES)
        </div>
        {/* Right Column */}
        <div className="flex flex-[66%] flex-col text-[#efefef] gap-12">
          {/* Details Section */}
          <div className="flex flex-col gap-14 text-[#efefef]">
            {values.map(({ number, title, text }) => (
              <div key={number}>
                <div className="mb-4 text-[14px] leading-[16px] font-[lato]">({number})</div>
                <div className="font-semibold mb-4 text-[24px] leading-[28px] font-[lato]">{title}</div>
                <div className="text-[17px] leading-[27px] font-[lato]">{text}</div>
                <div className="h-[0.1px] w-full bg-white mt-8"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About4;