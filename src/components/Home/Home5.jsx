import React from 'react'
import {circOut, motion} from "framer-motion"
import Square from '../../Animations/Square'
import Cosmo from '../../Animations/Cosmo'
import Cube from '../../Animations/Cube'

const Home5 = () => {
  return (
    <div className='min-h-screen w-full text-[#EFEFEF] bg-[#111111] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-20 sm:pt-24 md:pt-32 lg:pt-40'>
      <motion.div
        className="h-[0.1px] bg-white"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{
          duration: 1.5,
          delay: 0.1,
          ease: circOut,
        }}
        viewport={{ once: true }}
      />
      
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-2 mt-16 sm:mt-20 md:mt-32 lg:mt-40'>
        {/* Left sidebar */}
        <div className='font-[figtree] w-full lg:flex-[40%] text-sm sm:text-base leading-[18px] mb-8 lg:mb-0 lg:h-screen'>
          (CAN)
        </div>
        
        {/* Main content */}
        <div className='font-[figtree] w-full lg:flex-[60%] text-sm sm:text-base min-h-screen flex flex-col gap-12 sm:gap-16 md:gap-18'>
          
          {/* Web Development Section */}
          <div className='flex flex-col gap-4 sm:gap-6'>
            <p>(1)</p>
            <span className='text-xl sm:text-2xl lg:text-[24px] leading-tight sm:leading-[27.6px]'>
              WEB DEVELOPMENT
            </span>
            <p className='text-sm sm:text-base lg:text-[17px] font-[lato] leading-relaxed sm:leading-[27.2px]'>
              Static construction using HTML, CSS, and JavaScript is possible. We strive for implementations that are highly reproducible and respect the design. We are also capable of building with frameworks such as Astro and Vue.
            </p>
            <div className='h-64 sm:h-80 md:h-96 lg:h-[486px] w-full bg-gray-100 flex items-center justify-center rounded-lg'>
              <Square/>
            </div>
          </div>
          
          {/* Web Design Section */}
          <div className='flex flex-col gap-4 sm:gap-6'>
            <p>(2)</p>
            <span className='text-xl sm:text-2xl lg:text-[24px] leading-tight sm:leading-[27.6px]'>
              WEB DESIGN
            </span>
            <p className='text-sm sm:text-base lg:text-[17px] font-[lato] leading-relaxed sm:leading-[27.2px]'>
              Static construction using HTML, CSS, and JavaScript is possible. We strive for implementations that are highly reproducible and respect the design. We are also capable of building with frameworks such as Astro and Vue.
            </p>
            <div className='h-64 sm:h-80 md:h-96 lg:h-[486px] w-full bg-gray-100 flex items-center justify-center rounded-lg'>
              <Cube/>
            </div>
          </div>
          
          {/* Web Animations Section */}
          <div className='flex flex-col gap-4 sm:gap-6'>
            <p>(3)</p>
            <span className='text-xl sm:text-2xl lg:text-[24px] leading-tight sm:leading-[27.6px]'>
              WEB ANIMATIONS
            </span>
            <p className='text-sm sm:text-base lg:text-[17px] font-[lato] leading-relaxed sm:leading-[27.2px]'>
              Static construction using HTML, CSS, and JavaScript is possible. We strive for implementations that are highly reproducible and respect the design. We are also capable of building with frameworks such as Astro and Vue.
            </p>
            <div className='h-64 sm:h-80 md:h-96 lg:h-[486px] w-full bg-gray-100 flex items-center justify-center rounded-lg'>
              <Cosmo/>
            </div>
          </div>
          
          {/* Bottom spacer */}
          <div className='w-full h-20 sm:h-32 lg:h-40 bg-[#111111]'></div>
        </div>
      </div>
    </div>
  )
}

export default Home5