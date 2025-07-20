import React from 'react'
import ParallaxImage from '../../Animations/ParallaxImage'
import { Instagram, Facebook, X, Linkedin, Youtube } from "lucide-react";

const Homecontact = () => {
  return (
    <div className='h-screen sm:h-[900px] md:h-[1000px] flex flex-col justify-center items-center relative w-full p-4 sm:p-6 md:p-8 lg:p-10'>
      <div className='inset-0 absolute z-[-10]'>
        <ParallaxImage className="" src="./images/contactbg.webp"></ParallaxImage>
      </div>
      <div className='absolute z-[-1] bg-black/35 inset-0'></div>
      
      <div className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 
                      h-auto min-h-[400px] sm:min-h-[450px] md:min-h-[500px]
                      flex flex-col items-center justify-between 
                      p-4 sm:p-6 md:p-8 
                      bg-gray-300 
                      mx-auto'>
        
        <div className='uppercase font-[figtree] 
                       text-sm sm:text-base md:text-lg lg:text-xl 
                       font-semibold 
                       leading-tight sm:leading-[18px] md:leading-[20px] 
                       text-center 
                       w-full 
                       px-2 sm:px-4'>
          Open to full-time roles, freelance projects, and creative collaborations.
        </div>
        
        <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
          <button className="rounded-full p-2 sm:p-2.5 hover:bg-gray-100 transition">
            <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
          <button className="bg-gray-700 rounded-full p-2 sm:p-2.5 hover:bg-gray-300 transition">
            <Facebook size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
          <button className="bg-gray-700 rounded-full p-2 sm:p-2.5 hover:bg-gray-300 transition">
            <X size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
          <button className="bg-gray-700 rounded-full p-2 sm:p-2.5 hover:bg-gray-300 transition">
            <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
        </div>
        
        <div className='font-[figtree] 
                       text-base sm:text-lg md:text-xl 
                       font-semibold
                       text-center'>
          (CONTACT ME)
        </div>
        
      </div>
    </div>
  )
}

export default Homecontact