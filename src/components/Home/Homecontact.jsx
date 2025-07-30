import React from 'react'
import ParallaxImage from '../../Animations/ParallaxImage'
import { Instagram, Facebook, X, Linkedin, Youtube ,Github} from "lucide-react";
import Copy from '../../Animations/Copy';
import Bracket from '../../Animations/Bracket';

const Homecontact = () => {
  return (
    <div data-navbar-theme="dark" className='h-screen sm:h-[900px] md:h-[1000px] flex flex-col justify-center items-center relative w-full p-4 sm:p-6 md:p-8 lg:p-10'>
      <div className='inset-0 absolute z-[-10]'>
        <ParallaxImage className="" src="./images/contactbg.webp"></ParallaxImage>
      </div>
      <div className='absolute z-[-1] bg-black/35 inset-0'></div>
      
      <div className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
                      h-auto min-h-[400px] sm:min-h-[450px] md:min-h-[520px]
                      flex flex-col items-center justify-between 
                      p-4 sm:p-6 md:p-8 
                      bg-gray-300 
                      mx-auto'>
        
      {/* <Copy> */}
          <div className='uppercase font-[figtree] 
                       text-sm sm:text-base md:text-lg lg:text-xl 
                      
                       
                       leading-tight sm:leading-[18px] md:leading-[20px] 
                       text-center 
                      
                      
                       px-2 sm:px-4'>
          Open to full-time roles, freelance <br/> projects , and creative collaborations.
        </div>
      {/* </Copy> */}
        
        <div className="flex gap-3 sm:gap-4 flex-wrap justify-center">
           <a href="https://www.linkedin.com/in/ashutosh-dureja-919072209/" className="bg-gray-400 cursor-pointer rounded-full p-2 sm:p-2.5 hover:bg-gray-300 transform transition-colors  duration-[0.4s] ease-out">
            <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
          <a href="https://www.instagram.com/ashudureja_/" className="rounded-full cursor-pointer bg-gray-400 p-2 sm:p-2.5 hover:bg-gray-300 transform transition-colors  duration-[0.4s] ease-out">
            <Instagram size={16} className="sm:w-[18px]  sm:h-[18px]" />
          </a>
          <a href="https://github.com/ashudureja?tab=overview&from=2025-06-01&to=2025-06-30" className="bg-gray-400  cursor-pointer rounded-full p-2 sm:p-2.5 hover:bg-gray-300 transform transition-colors  duration-[0.4s] ease-out">
            <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
          <a href="https://www.linkedin.com/in/ashutosh-dureja-919072209/" className="bg-gray-400 cursor-pointer rounded-full p-2 sm:p-2.5 hover:bg-gray-300 transform transition-colors  duration-[0.4s] ease-out">
            <X size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
         
        </div>
        
        <div className='font-[figtree] 
                       text-base sm:text-lg md:text-xl 
                      
                       text-center'>
          (CONTACT ME)
        </div>

        {/* <Bracket text="CONTACT ME"  className='font-[figtree] 
                       text-base sm:text-lg md:text-xl 
                      
                       text-center'></Bracket> */}
        
      </div>
    </div>
  )
}

export default Homecontact