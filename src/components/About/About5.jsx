import React from 'react'
import { circOut, motion } from "framer-motion";


const About5 = () => {
  const tools = [
    { name: 'REACT', logo: 'https://img.icons8.com/ios11/512/react.png', proficiency: '98%' },
    { name: 'JAVASCRIPT', logo: 'https://e7.pngegg.com/pngimages/286/385/png-clipart-node-js-angularjs-javascript-mean-runtime-system-java-script-text-logo.png', proficiency: '99%' },
    { name: 'TYPESCRIPT', logo: 'https://png.pngtree.com/png-clipart/20230915/original/pngtree-ts-letter-logo-vector-png-image_12169600.png', proficiency: '80%' },
   
   
   
    { name: 'NEXT.JS', logo: 'https://img.icons8.com/fluent-systems-filled/512/nextjs.png', proficiency: '82%' },
    { name: 'TAILWIND', logo: 'https://images.icon-icons.com/3915/PNG/512/tailwindcss_logo_icon_249452.png', proficiency: '96%' },
      { name: 'REDUX', logo: 'https://w7.pngwing.com/pngs/18/986/png-transparent-redux-logos-brands-icon.png', proficiency: '95%' },
    { name: 'ZUSTAND', logo: 'https://images.icon-icons.com/3912/PNG/512/instatus_logo_icon_248012.png', proficiency: '78%' },
   
    { name: 'FIGMA', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968704.png', proficiency: '87%' },
    { name: 'GSAP', logo: 'https://img.favpng.com/23/21/0/superman-silhouette-superhero-angular-png-favpng-c7TZ74JTsJxh6VEJdrR6PSQf6.jpg', proficiency: '87%' },
    { name: 'FRAMER', logo: 'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/vector-icons/brand-framer-motion-pk1mas1m7u9hi06fqzq77f.png/brand-framer-motion-nuunolaqtcs7zlblwkjs.png?_a=DATAdtAAZAA0', proficiency: '90%' },
  
    { name: 'HTML5', logo: 'https://www.iconninja.com/files/994/839/796/html-black-icon.png', proficiency: '99%' }
  ]

  return (
    <div className='bg-[#efefef]  w-full pt-5'>
      {tools.map((tool, index) => (
        <div key={index} className=' w-full  h-20 flex flex-col'>
          <div className='flex px-4 md:px-6 justify-between w-full items-center text-[20px] md:text-[24px]  font-[lato] text-[#000]'>
            <div className='w-35 '>{tool.name}</div>
            <div className='-ml-24 h-10 w-10'>
              <img src={tool.logo}  ></img>
            </div>
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