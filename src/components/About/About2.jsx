import React from 'react'
import ParallaxImage from '../../Animations/ParallaxImage'

const About2 = () => {
  return (
    <div className='h-screen md:h-[120vh] 
                    flex flex-col justify-center items-center 
                    overflow-hidden relative w-full 
                    p-4 sm:p-6 md:p-8 lg:p-10'>
      
      <div className='inset-0 absolute z-[-10]'>
        <ParallaxImage className="" src="./images/about.jpeg"></ParallaxImage>
      </div>
      
      <div className='absolute z-[-1] bg-black/40 inset-0'></div>
      
      <div className='absolute uppercase 
                     bottom-8 sm:bottom-12 md:bottom-16 lg:bottom-20 xl:bottom-30 
                     right-4 sm:right-6 md:right-8 lg:right-10 
                     z-0 text-white font-[lato] 
                     text-5xl sm:text-3xl md:text-4xl lg:text-[80px] 
                     leading-tight sm:leading-[36px] md:leading-[48px] lg:leading-[80px] 
                     text-right 
                     max-w-[340px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[580px] 
                     break-words'>
        I really enjoy making cool websites
      </div>
      
    </div>
  )
}

export default About2