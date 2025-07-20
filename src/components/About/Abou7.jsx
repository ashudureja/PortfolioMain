import React from 'react'

const Abou7 = () => {
  return (
    <div className=' min-h-screen md:h-[130vh] w-full text-[#EFEFEF] bg-[#111111] flex flex-col gap-6 md:gap-8 lg:gap-10 items-center justify-center px-4 py-8 md:py-12 lg:py-20'>
      <div className='font-[figtree] text-sm md:text-base font-light'>(HOBBIES)</div>
      
      <div className='flex flex-col text-[#EFEFEF] items-center justify-center uppercase font-[lato] text-lg md:text-2xl lg:text-[32px] leading-tight md:leading-relaxed lg:leading-[37px] text-center '>
        <div className='text-[#efefef]'>Outside of creating websites, I enjoy staying active at the gym,</div>
        <div className='text-[#efefef]'>diving into exciting anime series during my free time,</div>
        <div className='text-[#efefef]'>and playing cricket with friends.</div>
      </div>
      
      <div className='flex flex-col md:flex-row gap-4 md:gap-4 items-center justify-center mt-6 md:mt-8 lg:mt-1 w-full max-w-6xl'>
        <div className='w-full max-w-[280px] md:max-w-[300px] lg:max-w-[338px] aspect-[338/408] md:mt-0 lg:mt-12'>
          <img 
            src='./images/bb1.jpg' 
            alt='Hobby activity 1'
            className='w-full h-full object-cover '
          />
        </div>
        
        <div className='w-full max-w-[280px] md:max-w-[300px] lg:max-w-[338px] aspect-[338/408]'>
          <img 
            src='./images/bb2.JPG' 
            alt='Hobby activity 2'
            className='w-full h-full object-cover '
          />
        </div>
        
        <div className='w-full max-w-[280px] md:max-w-[300px] lg:max-w-[338px] aspect-[338/408] md:mt-0 lg:mt-12'>
          <img 
            src='./images/bb3.JPG' 
            alt='Hobby activity 3'
            className='w-full h-full object-cover '
          />
        </div>
      </div>
    </div>
  )
}

export default Abou7