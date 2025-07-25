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
         <div className="w-[1.5rem] h-[1.5rem] relative ">
  <span className="absolute top-1/2 left-0 w-full h-px bg-black -translate-y-1/2"></span>
  <span className="absolute top-0 left-1/2 h-full w-px bg-black -translate-x-1/2"></span>
</div>
        <div className="w-[1.5rem] h-[1.5rem] relative ">
  <span className="absolute top-1/2 left-0 w-full h-px bg-black -translate-y-1/2"></span>
  <span className="absolute top-0 left-1/2 h-full w-px bg-black -translate-x-1/2"></span>
</div>
      </div>
      
      

 <div className='flex flex-col relative items-center justify-center'>
  <div className="relative group cursor-pointer inline-block">
    <Bracket text="NEXT" className='items-center justify-center font-[figtree]
      text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px]
      leading-tight sm:leading-[44px] md:leading-[54px] lg:leading-[64px] xl:leading-[74px]
      text-[#000]
      px-4' />
    <span className="absolute bottom-0 left-4 w-0 h-px bg-black transition-all duration-500 ease-out group-hover:w-[calc(100%-2rem)]"></span>
  </div>
</div>
      
      <div className='flex justify-between items-end'>
          <div className="w-[1.5rem] h-[1.5rem] relative ">
  <span className="absolute top-1/2 left-0 w-full h-px bg-black -translate-y-1/2"></span>
  <span className="absolute top-0 left-1/2 h-full w-px bg-black -translate-x-1/2"></span>
</div>
        
        <div className='font-[lato] 
                       leading-tight sm:leading-[10px] md:leading-[12px] 
                       uppercase 
                       text-[8px] sm:text-[9px] md:text-[10px] 
                       text-[#000] 
                       text-center 
                       px-2 sm:px-4'>
          ©2025 ASHU DUREJA. All rights reserved.
        </div>
        
         <div className="w-[1.5rem] h-[1.5rem] relative ">
  <span className="absolute top-1/2 left-0 w-full h-px bg-black -translate-y-1/2"></span>
  <span className="absolute top-0 left-1/2 h-full w-px bg-black -translate-x-1/2"></span>
</div>
      </div>
      
    </div>
  )
}

export default Homelast