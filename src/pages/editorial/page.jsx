import { useEffect, useRef } from "react";
import gsap from "gsap";
import ParallaxImage from "../../Animations/ParallaxImage";
import Homecontact from "../../components/Home/Homecontact";
import Homelast from "../../components/Home/Homelast";
import About from "../About";
import About1 from "../../components/About/About1";
import Project1 from "../../components/Projects/Project1";
import Projects2 from "../../components/Projects/Projects2";
import { useState } from "react";

const Project = () => {
  const containerRef = useRef(null);
  const [hoveredProject, setHoveredProject] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
    const tooltipRef = useRef(null)
    const animationRef = useRef(null)

  const articles = [
    {
      id: 1,
      image: "/projects/p1.png",
      alt: "AI Voices Ba",
      date: "6.19.2024",
      category: "https://ashu-screenshots-gradient.netlify.app",
      title: "Gradly"
    },
    {
      id: 2,
      image: "/projects/p3.png",
      alt: "AI Ethics Discussion",
      date: "6.19.2024",
      category: "https://ashu-ai-trainer.netlify.app",
      title: "AI Trainer"
    },
    {
      id: 3,
     image: "/projects/p3.png",
      alt: "Artists' Rights",
      date: "6.19.2024",
      category: "https://ashu-ecommerce.netlify.app",
      title: "Minimal Ecommerce"
    },
    {
      id: 4,
     image: "/projects/p4.png",
      alt: "AI and Music",
      date: "6.19.2024",
      category: "https://animehub12.netlify.app",
      title: "Anime Hub "
    },
    {
      id: 5,
     image: "/projects/p2.png",
      alt: "AI and Music",
      date: "6.19.2024",
      category: "https://pokedoxmaster.netlify.app",
      title: "Pokedex"
    },
    {
      id: 6,
     image: "/projects/p5.png",
      alt: "Policy Reforms",
      date: "6.19.2024",
      category: "https://awards-animations.netlify.app",
      title: "Animation Library"
    },
     {
      id: 7,
     image: "/projects/p1.png",
      alt: "Policy Reforms",
      date: "6.19.2024",
      category: "https://yeezykanye.netlify.app",
      title: "Yeezy Store"
    },
     {
      id: 8,
     image: "/projects/p5.png",
      alt: "Policy Reforms",
      date: "6.19.2024",
      category: "https://ashu-awwwards.netlify.app",
      title: "Awards clone"
    },
    {
      id: 9,
     image: "/projects/p5.png",
      alt: "Policy Reforms",
      date: "6.19.2024",
      category: "https://ashu-ai.netlify.app",
      title: "AI Landing page"
    },
    {
      id: 10,
     image: "/projects/p7.png",
      alt: "Future of AI",
      date: "6.19.2024",
      category: "https://shirtthreed.netlify.app",
      title: "Anime Shirt"
    },
    
  ];

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

  const articleDistribution = [
    [0, 1, 0],
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
  [0, 0, 1],
  ];

  const getArticleLayout = () => {
    let articleIndex = 0;
    const layout = [];
    const maxRows = Math.min(articleDistribution.length, articles.length);

    for (let rowIndex = 0; rowIndex < maxRows; rowIndex++) {
      const rowLayout = [0, 1, 2].map(colIndex => {
        if (articleDistribution[rowIndex][colIndex] === 1 && articleIndex < articles.length) {
          const article = articles[articleIndex];
          articleIndex++;
          return article;
        }
        return null;
      });
      layout.push(rowLayout);
    }

    return layout;
  };

  const articleLayout = getArticleLayout();

  const generateSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  };

  const navigateTo = (path) => {
    console.log(`Navigating to: ${path}`);
    // Add your navigation logic here
  };

  return (
   <>
   <Project1/>
    <div 
      className="relative w-full bg-[#efefef] px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden"
    >
    
      <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 pt-6 sm:pt-8">
        {articleLayout.map((row, rowIndex) => (
          <div 
            className="article-row relative w-full flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 flex-col sm:flex-col md:flex-col lg:flex-row"
            key={`row-${rowIndex}`}
          >
            {row.map((article, colIndex) => (
              
              <a
              href={article?.category}
              target="_blank"
                className={`
                  flex flex-col gap-3 sm:gap-4
                  ${article === null ? 
                    "flex-1 hidden lg:block" : 
                    "w-full sm:w-full md:w-full lg:flex-[2]"
                  }
                `}
                
                key={`col-${rowIndex}-${colIndex}`}
              >
                {article && (
                  <div
                    className="w-full flex flex-col cursor-pointer group"
                    onClick={() => navigateTo(`/editorial/${generateSlug(article.title)}`)}
                  >
                    
                    <div className="w-full mb-2 sm:mb-3 md:mb-4 overflow-hidden relative
                      h-[36vh] md:h-[85vh]
                      sm:aspect-[16/12] 
                      md:aspect-[16/13] 
                      lg:aspect-[16/15] 
                      xl:aspect-[16/15]"
                      onMouseEnter={() => setHoveredProject(true)}
          onMouseLeave={() => setHoveredProject(false)}>
                      <ParallaxImage
                        speed={0.15}
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover "
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
                    </div>
                    
               
                    <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row gap-2 sm:gap-0">
                      <div className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 
                        font-medium text-black group-hover:text-gray-700 transition-colors duration-300
                        leading-tight sm:leading-normal">
                        {article.title}
                      </div>
                   
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 sm:hidden">
                        <span>REACT</span>
                        
                      </div>
                    </div>
                  </div>
                )}
              </a>
            ))}
          </div>
        ))}
        {hoveredProject && (
        <div 
          ref={tooltipRef}
          className='fixed top-0 left-0 rounded-lg shadow-xl z-50 pointer-events-none hidden md:block'
          style={{
            transform: `translate(${smoothPosition.x + 15}px, ${smoothPosition.y - 60}px)`,
            willChange: 'transform',
          }}
        >
          <div className='inline-block bg-white text-black bg-opacity-10 px-3 py-2 rounded text-xs  backdrop-blur-sm'>
            (VIEW LIVE)
          </div>
        </div>
      )}
      </div>
      
      
      <div className="h-16 sm:h-24 md:h-32 lg:h-40 xl:h-50"></div>
    </div>
    {/* <Projects2/> */}
    <Homecontact/>
    <Homelast page="contact"/>
   </>
  );
};

export default Project;