import React from 'react'

const Projects2 = () => {

    const projects = [
    {
      id: 1,
      image: "/projects/p1.png",
     
      title: "AI Trainer"
    },
    {
      id: 2,
      image: "/projects/p2.png",
      
      title: "Yeezy Store"
    },
    {
      id: 3,
     image: "/projects/p3.png",
      
      title: "Pokedex'"
    },
    {
      id: 4,
     image: "/projects/p4.png",
     
      title: "Anime Hub "
    },
    {
      id: 5,
     image: "/projects/p5.png",
      
      title: "Animation Library"
    },
    {
      id: 6,
     image: "/projects/p6.png",
     
      title: "Valorant"
    },
    {
      id: 7,
     image: "/projects/p7.png",
    
      title: "Anime Shirt"
    },
    {
      id: 8,
      image: "/ec3.png",
     
      title: "Temu Store"
    }
  ];
  return (
    <div className='min-h-screen w-full bg-black  grid grid-cols-2 '>
        {projects.map((project,i)=>{
            return (
                <div className={`h-[80vh] p-5  border border-white/20 `}>
                    <img src={project.image}></img>
                </div>
            )
        })}


    </div>
  )
}

export default Projects2