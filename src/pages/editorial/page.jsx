import { useEffect, useRef } from "react";
import gsap from "gsap";
import ParallaxImage from "../../Animations/ParallaxImage";
import Homecontact from "../../components/Home/Homecontact";
import Homelast from "../../components/Home/Homelast";
import About from "../About";
import About1 from "../../components/About/About1";
import Project1 from "../../components/Projects/Project1";

const Project = () => {
  const containerRef = useRef(null);

  const articles = [
    {
      id: 1,
      image: "/projects/p1.png",
      alt: "AI Voices Ba",
      date: "6.19.2024",
      category: "News",
      title: "AI Trainer"
    },
    {
      id: 2,
      image: "/projects/p2.png",
      alt: "AI Ethics Discussion",
      date: "6.19.2024",
      category: "News",
      title: "Yeezy Store"
    },
    {
      id: 3,
     image: "/projects/p3.png",
      alt: "Artists' Rights",
      date: "6.19.2024",
      category: "News",
      title: "Pokedex'"
    },
    {
      id: 4,
     image: "/projects/p4.png",
      alt: "AI and Music",
      date: "6.19.2024",
      category: "News",
      title: "Anime Hub "
    },
    {
      id: 5,
     image: "/projects/p5.png",
      alt: "Policy Reforms",
      date: "6.19.2024",
      category: "News",
      title: "Animation Library"
    },
    {
      id: 6,
     image: "/projects/p6.png",
      alt: "AI and Creative Rights",
      date: "6.19.2024",
      category: "News",
      title: "Valorant"
    },
    {
      id: 7,
     image: "/projects/p7.png",
      alt: "Future of AI",
      date: "6.19.2024",
      category: "News",
      title: "Anime Shirt"
    },
    {
      id: 8,
      image: "/ec3.png",
      alt: "Future of AI",
      date: "6.19.2024",
      category: "News",
      title: "Temu Store"
    }
  ];

  const articleDistribution = [
    [0, 1, 0],
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0],
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
      {/* Articles grid */}
      <div className="flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 pt-6 sm:pt-8">
        {articleLayout.map((row, rowIndex) => (
          <div 
            className="article-row relative w-full flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 flex-col sm:flex-col md:flex-col lg:flex-row"
            key={`row-${rowIndex}`}
          >
            {row.map((article, colIndex) => (
              <div
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
                    {/* Article image with responsive aspect ratios */}
                    <div className="w-full mb-2 sm:mb-3 md:mb-4 overflow-hidden relative
                      h-[36vh] md:h-[80vh]
                      sm:aspect-[16/12] 
                      md:aspect-[16/13] 
                      lg:aspect-[16/15] 
                      xl:aspect-[16/15]">
                      <ParallaxImage
                        speed={0.3}
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover "
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
                    </div>
                    
                    {/* Article info with responsive typography */}
                    <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row gap-2 sm:gap-0">
                      <div className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl 
                        font-medium text-black group-hover:text-gray-700 transition-colors duration-300
                        leading-tight sm:leading-normal">
                        {article.title}
                      </div>
                      
                      {/* Optional: Add date/category for mobile */}
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 sm:hidden">
                        <span>REACT</span>
                        {/* <span>•</span>
                        <span>{article.date}</span> */}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Responsive bottom spacing */}
      <div className="h-16 sm:h-24 md:h-32 lg:h-40 xl:h-50"></div>
    </div>
    <Homecontact/>
    <Homelast page="contact"/>
   </>
  );
};

export default Project;