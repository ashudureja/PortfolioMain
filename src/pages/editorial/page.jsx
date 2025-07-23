
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
     
      className="relative w-full bg-[#efefef] px-4  overflow-hidden"
    >
      {/* Top spacing */}
     
      
      {/* Articles grid */}
      <div className="flex flex-col gap-24 pt-8">
        {articleLayout.map((row, rowIndex) => (
          <div 
            className="article-row relative w-full flex gap-4 lg:flex-row flex-col"
            key={`row-${rowIndex}`}
          >
            {row.map((article, colIndex) => (
              <div
                className={`
                  flex flex-col gap-4
                  ${article === null ? 
                    "flex-1 hidden lg:block" : 
                    "flex-[2] w-full"
                  }
                `}
                key={`col-${rowIndex}-${colIndex}`}
              >
                {article && (
                  <div
                    className="w-full flex flex-col cursor-pointer group"
                    onClick={() => navigateTo(`/editorial/${generateSlug(article.title)}`)}
                  >
                    {/* Article image with hover effect */}
                    <div className="w-full mb-2 overflow-hidden  lg:aspect-[16/15] aspect-[4/3] relative">
                      <ParallaxImage
                        speed={0.3}
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover "
                      />
                      {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div> */}
                    </div>
                    
                    {/* Article info */}
                    <div className="flex justify-between items-center">
                      <h2 className="text-lg font-medium text-black  transition-colors duration-300">
                        {article.title}
                      </h2>
                      
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      {/* Bottom spacing */}
      <div className="h-50"></div>
    </div>
    <Homecontact/>
    <Homelast/></>
  );
};

export default Project;