import React from 'react'

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
    <div className='bg-[#efefef] h-screen w-full'>
      {tools.map((tool, index) => (
        <div key={index} className='items-center justify-center p-5 w-full border-b-1 h-20 flex'>
          <div className='flex justify-between w-full items-center text-[24px] leading-[24px] font-[lato] text-[#000]'>
            <div className='w-35 '>{tool.name}</div>
            <div className='-ml-14'>{tool.logo}</div>
            <div>{tool.proficiency}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default About5