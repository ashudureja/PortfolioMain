import React from 'react'
import ParallaxImage from '../../Animations/ParallaxImage'
import Bracket from '../../Animations/Bracket'

const About4 = () => {
  return (
    <div className='h-[110vh] flex flex-col justify-between overflow-hidden relative w-full 
                    p-4 sm:p-6 md:p-8 lg:p-10'>
      
      <div className='inset-0 absolute z-[-10]'>
        <ParallaxImage className="hidden md:block" src="./images/education.jpg"></ParallaxImage>
        <img className='block md:hidden' src="./images/education.jpg"></img>
      </div>
      
      <div className='absolute z-[-1] bg-black/10 inset-0'></div>
      
      {/* Top Section */}
      <div className='justify-between flex items-center text-white'>
        <span className='!text-white 
                        text-lg sm:text-xl md:text-2xl lg:text-[30px] 
                        font-extralight'>
          +
        </span>
        <p className='text-xs sm:text-sm md:text-base lg:text-lg 
                     font-medium tracking-wider 
                     text-center px-4'>
          FRONTEND DEVELOPER
        </p>
        <span className='!text-white 
                        text-lg sm:text-xl md:text-2xl lg:text-[30px] 
                        font-extralight'>
          +
        </span>
      </div>
      
      {/* Center Section */}
      {/* <div className='uppercase text-center z-0 text-white font-[lato] 
                     text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] 
                     leading-tight sm:leading-[36px] md:leading-[48px] lg:leading-[58px] xl:leading-[62px] 
                     px-4'>
        (technologies)
      </div> */}
      <Bracket text="TECHNOLOGIES" className='uppercase items-center justify-center text-center z-0 text-white font-[lato] 
                     text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] 
                     leading-tight sm:leading-[36px] md:leading-[48px] lg:leading-[58px] xl:leading-[62px] 
                     px-4' ></Bracket>
      
      {/* Bottom Section */}
      <div className='justify-between flex items-center text-white'>
        <span className='!text-white 
                        text-lg sm:text-xl md:text-2xl lg:text-[30px] 
                        font-extralight'>
          +
        </span>
        <p className='text-xs sm:text-sm md:text-base lg:text-lg 
                     font-medium tracking-wider 
                     text-center px-4'>
          FRONTEND DEVELOPER
        </p>
        <span className='!text-white 
                        text-lg sm:text-xl md:text-2xl lg:text-[30px] 
                        font-extralight'>
          +
        </span>
      </div>
      
    </div>
  )
}

export default About4