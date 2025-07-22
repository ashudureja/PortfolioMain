import React from 'react'
import { circOut, motion } from "framer-motion";


const About5 = () => {
  const tools = [
    { name: 'REACT', logo: 'LOGO', proficiency: '98%' },
    { name: 'JAVASCRIPT', logo: 'LOGO', proficiency: '95%' },
    { name: 'TYPESCRIPT', logo: 'LOGO', proficiency: '80%' },
   
   
   
    { name: 'NEXT.JS', logo: 'LOGO', proficiency: '82%' },
    { name: 'TAILWIND', logo: 'LOGO', proficiency: '96%' },
      { name: 'REDUX', logo: 'LOGO', proficiency: '85%' },
    { name: 'ZUSTAND', logo: 'LOGO', proficiency: '78%' },
   
    { name: 'FIGMA', logo: 'LOGO', proficiency: '87%' },
  
    { name: 'HTML5', logo: 'LOGO', proficiency: '83%' }
  ]

  return (
    <div className='bg-[#efefef]  w-full pt-5'>
      {tools.map((tool, index) => (
        <div key={index} className=' w-full  h-20 flex flex-col'>
          <div className='flex px-2 md:px-5 justify-between w-full items-center text-[16px] md:text-[24px]  font-[lato] text-[#000]'>
            <div className='w-35 '>{tool.name}</div>
            <div className='-ml-24'>{tool.logo}</div>
            <div>{tool.proficiency}</div>
          </div>
          <motion.div
                  className="h-[1.5px] bg-black mt-3 rounded-full "
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{
                    duration: 1,
                    delay: 0.1,
                    ease: circOut,
                  }}
                  viewport={{ once: true }}
                />
        </div>
      ))}
    </div>
  )
}

export default About5