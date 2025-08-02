import React, { useState, useEffect, useRef } from 'react'
import Bracket from '../../Animations/Bracket'

const Home4 = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const tooltipRef = useRef(null)
  const animationRef = useRef(null)

  const projects = [
    
    
    { id: 4, image: "./projects/gd1.png", title: "Gradly", description: "Brand identity system" ,to:"https://ashu-screenshots-gradient.netlify.app"},
   
    { id: 3, image: "./projects/at3.png", title: " AI Trainer", description: "Interactive experience",to:"https://ashu-ai-trainer.netlify.app" },
     { id: 5, image: "./projects/mc2.png", title: "Minimal Ecommerce", description: "Motion graphics reel",to:"https://ashu-ecommerce.netlify.app/" },
    { id: 1, image: "./projects/p4.png", title: "Anime Hub", description: "Creative design showcase",to:"https://animehub12.netlify.app" },
    { id: 2, image: "./projects/pk4.png", title: "Pokedex", description: "Digital art collection",to:"https://pokedoxmaster.netlify.app" },
  ]

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Smooth animation for tooltip following
  useEffect(() => {
    const lerp = (start, end, factor) => start + (end - start) * factor

    const animate = () => {
      setSmoothPosition(prev => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15)
      }))
      
      animationRef.current = requestAnimationFrame(animate)
    }

    if (hoveredProject) {
      animationRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition, hoveredProject])

  // Initialize smooth position when tooltip first appears
  useEffect(() => {
    if (hoveredProject) {
      setSmoothPosition(mousePosition)
    }
  }, [hoveredProject])

  return (
    <div data-navbar-theme="dark" className='min-h-screen text-[#EFEFEF] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-[40px] bg-[#111111] w-full relative overflow-x-hidden'>
      {/* <div className='font-[figtree] text-sm sm:text-base md:text-[16px] pt-4 sm:pt-6 md:pt-8'>(SELECTED PROJECTS)</div> */}
     
      <Bracket text="SELECTED PROJECTS" className='font-[figtree] text-sm sm:text-base md:text-[16px] pt-4 sm:pt-6 md:pt-8'></Bracket>
      
      {/* Desktop and Tablet Layout */}
      <div className='hidden md:grid md:grid-cols-2 gap-2 mt-4'>
        {/* Project 1 */}
        <a 
        href="https://ashu-screenshots-gradient.netlify.app"
        target="_blank"
          className='h-[50vh] lg:h-[100vh] w-full relative group cursor-pointer overflow-hidden'
          onMouseEnter={() => setHoveredProject(projects[0])}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <img 
            src={projects[0].image} 
            alt={projects[0].title}
            className='w-full h-full object-cover transition-transform duration-500 '
          />
          <div className='absolute inset-0 bg-black opacity-15 group-hover:opacity-35 transition-all duration-500'></div>
          <div className='absolute bottom-4 left-4 transition-opacity duration-500'>
            <div className='text-white uppercase font-[lato] font-light text-lg lg:text-2xl'>{projects[0].title}</div>
          </div>
        </a>

        {/* Project 2 */}
        <a 
        href="https://ashu-ecommerce.netlify.app/"
        target="_blank"
          className='h-[50vh] lg:h-[100vh] w-full relative group cursor-pointer overflow-hidden'
          onMouseEnter={() => setHoveredProject(projects[1])}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <img 
            src={projects[1].image} 
            alt={projects[1].title}
            className='w-full h-full object-cover transition-transform duration-500 '
          />
          <div className='absolute inset-0 bg-black opacity-15 group-hover:opacity-30 transition-all duration-500'></div>
          <div className='absolute bottom-4 left-4 transition-opacity duration-500'>
            <div className='text-white uppercase font-[lato] font-light text-lg lg:text-2xl'>{projects[1].title}</div>
          </div>
        </a>

        {/* Project 3 - Full width */}
        <a 
        href="https://ashu-ai-trainer.netlify.app"
        target="_blank"
          className='col-span-2 h-[50vh] lg:h-[100vh] w-full relative group cursor-pointer overflow-hidden'
          onMouseEnter={() => setHoveredProject(projects[2])}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <img 
            src={projects[2].image} 
            alt={projects[2].title}
            className='w-full h-full object-cover transition-transform duration-500 '
          />
          <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-35 transition-all duration-500'></div>
          <div className='absolute bottom-4 left-4 transition-opacity duration-500'>
            <div className='text-white uppercase font-[lato] font-light text-lg lg:text-2xl '>{projects[2].title}</div>
          </div>
        </a>

        {/* Project 4 */}
        <a 
        href="https://animehub12.netlify.app"
        target="_blank"
          className='col-span-1 h-[50vh] lg:h-[100vh] w-full relative group cursor-pointer overflow-hidden'
          onMouseEnter={() => setHoveredProject(projects[3])}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <img 
            src={projects[3].image} 
            alt={projects[3].title}
            className='w-full h-full object-cover transition-transform duration-500 '
          />
          <div className='absolute inset-0 bg-black opacity-15 group-hover:opacity-40 transition-all duration-500'></div>
          <div className='absolute bottom-4 left-4 transition-opacity duration-500'>
            <div className='text-white uppercase font-[lato] font-light text-lg lg:text-2xl'>{projects[3].title}</div>
          </div>
        </a>

        {/* Project 5 */}
        <a 
        href="https://pokedoxmaster.netlify.app"
        target="_blank"
          className='col-span-1 h-[50vh] lg:h-[100vh] w-full relative group cursor-pointer overflow-hidden'
          onMouseEnter={() => setHoveredProject(projects[4])}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <img 
            src={projects[4].image} 
            alt={projects[4].title}
            className='w-full h-full object-cover transition-transform duration-500 '
          />
          <div className='absolute inset-0 bg-black opacity-15 group-hover:opacity-50 transition-all duration-500'></div>
          <div className='absolute bottom-4 left-4 transition-opacity duration-500'>
            <div className='text-white uppercase font-[lato] font-light text-lg lg:text-2xl'>{projects[4].title}</div>
          </div>
        </a>
      </div>

      {/* Mobile Layout - Single Column */}
      <div className='md:hidden flex flex-col gap-4 mt-4'>
        {projects.map((project, index) => (
          <a 
          href={project.to}
          target="_blank"
            key={project.id}
            className='h-[40vh] sm:h-[50vh] w-full relative group cursor-pointer overflow-hidden'
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <img 
              src={project.image} 
              alt={project.title}
              className='w-full h-full object-cover transition-transform duration-500 '
            />
            <div className='absolute inset-0 bg-black opacity-25 group-hover:opacity-10 transition-all duration-500'></div>
            <div className='absolute bottom-3 left-3 '>
              <div className='text-white uppercase font-[lato] font-light text-lg lg:text-2xl'>{project.title}</div>
            </div>
          </a>
        ))}
      </div>

      {/* Smooth tooltip that follows mouse - Hidden on mobile */}
      {hoveredProject && (
        <div 
          ref={tooltipRef}
          className='fixed top-0 left-0 rounded-lg shadow-xl z-50 pointer-events-none hidden md:block'
          style={{
            transform: `translate(${smoothPosition.x + 15}px, ${smoothPosition.y - 60}px)`,
            willChange: 'transform',
          }}
        >
          <div className='inline-block bg-white text-black bg-opacity-10 px-3 py-2 rounded text-xs border border-gray-600 backdrop-blur-sm'>
            (VIEW LIVE)
          </div>
        </div>
      )}

      {/* <div className='font-[figtree] text-sm sm:text-base md:text-[16px] w-full text-center mt-8 sm:mt-10 md:mt-14 pb-8 sm:pb-10 md:pb-12'>(ALL PROJECTS)</div> */}
    
        <Bracket text="ALL PROJECTS" className="font-[figtree] items-center justify-center text-sm sm:text-base md:text-[16px] w-full text-center mt-8 sm:mt-10 md:mt-14 pb-8 sm:pb-10 md:pb-12"></Bracket>
 
    </div>
  )
}

export default Home4