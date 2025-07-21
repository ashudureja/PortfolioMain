import React from 'react'
import Bracket from '../../Animations/Bracket'

const Homelast = () => {
  return (
    <div className="h-screen w-full 
                    px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px] 
                    py-4 sm:py-5 md:py-[20px] 
                    flex flex-col justify-between 
                    bg-[#efefef]">
      
      <div className='flex justify-between items-start'>
        <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                       text-black/65 font-extralight'>+</div>
        <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                       text-black/65 font-extralight'>+</div>
      </div>
      
      

      <Bracket text="NEXT" className='w-full items-center justify-center font-[figtree] 
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] 
                     leading-tight sm:leading-[44px] md:leading-[54px] lg:leading-[64px] xl:leading-[74px] 
                     text-[#000] 
                     px-4' ></Bracket>
      
      <div className='flex justify-between items-end'>
        <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                       text-black/65 font-extralight'>+</div>
        
        <div className='font-[lato] 
                       leading-tight sm:leading-[10px] md:leading-[12px] 
                       uppercase 
                       text-[8px] sm:text-[9px] md:text-[10px] 
                       text-[#000] 
                       text-center 
                       px-2 sm:px-4'>
          ©2025 ASHU DUREJA. All rights reserved.
        </div>
        
        <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                       text-black/65 font-extralight'>+</div>
      </div>
      
    </div>
  )
}

export default Homelast