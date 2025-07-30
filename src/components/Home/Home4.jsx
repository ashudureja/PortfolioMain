import React, { useState, useEffect, useRef } from 'react'
import Bracket from '../../Animations/Bracket'

const Home4 = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const tooltipRef = useRef(null)
  const animationRef = useRef(null)

  const projects = [
    { id: 1, image: "./projects/p4.png", title: "Project Alpha", description: "Creative design showcase" },
    { id: 2, image: "./projects/p2.png", title: "Project Beta", description: "Digital art collection" },
    { id: 3, image: "./projects/p7.png", title: "Project Gamma", description: "Interactive experience" },
    { id: 4, image: "./projects/p5.png", title: "Project Delta", description: "Brand identity system" },
    { id: 5, image: "./projects/p1.png", title: "Project Epsilon", description: "Motion graphics reel" }
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
        <div 
          className='h-[50vh] lg:h-[100vh] w-full relative group cursor-pointer overflow-hidden'
          onMouseEnter={() => setHoveredProject(projects[0])}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <img 
            src={projects[0].image} 
            alt={projects[0].title}
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
          />
          <div className='absolute inset-0 bg-black opacity-25 group-hover:opacity-10 transition-all duration-500'></div>
          <div className='absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
            <div className='text-white uppercase font-[lato] font-light text-lg lg:text-2xl'>{projects[0].title}</div>
          </div>
        </div>

        {/* Project 2 */}
        <div 
          className='h-[50vh] lg:h-[100vh] w-full relative group cursor-pointer overflow-hidden'
          onMouseEnter={() => setHoveredProject(projects[1])}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <img 
            src={projects[1].image} 
            alt={projects[1].title}
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
          />
          <div className='absolute inset-0 bg-black opacity-25 group-hover:opacity-10 transition-all duration-500'></div>
          <div className='absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
            <div className='text-white uppercase font-[lato] font-light text-lg lg:text-2xl'>{projects[1].title}</div>
          </div>
        </div>

        {/* Project 3 - Full width */}
        <div 
          className='col-span-2 h-[50vh] lg:h-[100vh] w-full relative group cursor-pointer overflow-hidden'
          onMouseEnter={() => setHoveredProject(projects[2])}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <img 
            src={projects[2].image} 
            alt={projects[2].title}
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
          />
          <div className='absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-all duration-500'></div>
          <div className='absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
            <div className='text-white uppercase font-[lato] font-light text-lg lg:text-2xl '>{projects[2].title}</div>
          </div>
        </div>

        {/* Project 4 */}
        <div 
          className='col-span-1 h-[50vh] lg:h-[100vh] w-full relative group cursor-pointer overflow-hidden'
          onMouseEnter={() => setHoveredProject(projects[3])}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <img 
            src={projects[3].image} 
            alt={projects[3].title}
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
          />
          <div className='absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-all duration-500'></div>
          <div className='absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
            <div className='text-white uppercase font-[lato] font-light text-lg lg:text-2xl'>{projects[3].title}</div>
          </div>
        </div>

        {/* Project 5 */}
        <div 
          className='col-span-1 h-[50vh] lg:h-[100vh] w-full relative group cursor-pointer overflow-hidden'
          onMouseEnter={() => setHoveredProject(projects[4])}
          onMouseLeave={() => setHoveredProject(null)}
        >
          <img 
            src={projects[4].image} 
            alt={projects[4].title}
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
          />
          <div className='absolute inset-0 bg-black opacity-20 group-hover:opacity-10 transition-all duration-500'></div>
          <div className='absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
            <div className='text-white uppercase font-[lato] font-light text-lg lg:text-2xl'>{projects[4].title}</div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Single Column */}
      <div className='md:hidden flex flex-col gap-4 mt-4'>
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className='h-[40vh] sm:h-[50vh] w-full relative group cursor-pointer overflow-hidden'
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <img 
              src={project.image} 
              alt={project.title}
              className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-black opacity-25 group-hover:opacity-10 transition-all duration-500'></div>
            <div className='absolute bottom-3 left-3 '>
              <div className='text-white uppercase font-[lato] font-light text-lg lg:text-2xl'>{project.title}</div>
            </div>
          </div>
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