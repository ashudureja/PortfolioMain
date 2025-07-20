import React from 'react'
import ParallaxImage from '../../Animations/ParallaxImage'


const About6 = () => {
  return (
    <div className='h-[110vh] flex flex-col justify-center items-center overflow-hidden relative w-full p-10 '>
        <div className='inset-0 absolute z-[-10]'>
            <ParallaxImage className="" src="./images/gymbg.jpg"></ParallaxImage>


        </div>
        <div className='absolute z-[-1] bg-black/20 inset-0'></div>
        <div className=' uppercase  z-0 text-white font-[lato] text-[52px] leading-[62px] '>(hobbies)</div>
        
       
       
        
    </div>
  )
}

export default About6