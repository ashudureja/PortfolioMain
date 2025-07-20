import React from 'react'

const Home3 = () => {
  return (
    <div className='min-h-screen w-full text-[#EFEFEF] bg-[#111111] flex flex-col gap-6 sm:gap-8 md:gap-10 items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-26'>
      
      {/* Technology label */}
      <div className='font-[figtree] text-[12px] sm:text-[14px] md:text-[16px] font-light'>
        (TECHNOLOGY)
      </div>
      
      {/* Main content text */}
      <div className='flex font-[lato] uppercase text-[16px] sm:text-[22px] md:text-[28px] lg:text-[32px] leading-[1.2] sm:leading-[1.15] md:leading-[0.9] flex-col text-[#EFEFEF] items-center justify-center text-center max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[70%] xl:max-w-none'>
        <div className='text-[#efefef] mb-1 sm:mb-2'>I am continuing my studies primarily</div>
        <div className='text-[#efefef] mb-1 sm:mb-2'>with a focus on technologies that enhance web-based expression.</div>
        <div className='text-[#efefef] mb-1 sm:mb-2'>I am also interested in developing CMSs and various other tools,</div>
        <div className='text-[#efefef]'>so I plan to further improve my skills in these areas as well.</div>
      </div>
      
      {/* Image container */}
      <div className='w-[250px] h-[300px] sm:w-[280px] sm:h-[336px] md:w-[320px] md:h-[384px] lg:w-[338px] lg:h-[408px] overflow-hidden'>
        <img 
          src='./images/ashu8.jpg' 
          alt='Technology focus'
          className='w-full h-full object-cover'
        />
      </div>
      
      {/* Skills/Technologies */}
      <div className='max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-none text-center'>
        <div className='text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-[#efefef] font-medium tracking-wide'>
          REACT/JAVASCRIPT/TAILWIND CSS/HTML5/GSAP
        </div>
      </div>
      
    </div>
  )
}

export default Home3

