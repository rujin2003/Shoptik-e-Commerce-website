import React, { useState } from "react";
import Blog3 from '../assets/Blog3.webp';
import Testimonials from "../components/Testimonials";




// Card Component
const Card = ({ image, title, description, category, readTime }) => {
  return (
    <div className="relative snap-start scroll-ml-6 shrink-0 first:pl-6 last:pr-6">
      <div className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-60 md:w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1">
        <a href="#" title="" className="flex shrink-0 aspect-w-4 aspect-h-3">
          <img
            className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110"
            src={image}
            alt={title}
          />
        </a>
        <div className="flex-1 px-4 py-5 sm:p-6">
          <a href="#" title="" className="">
            <p className="text-lg font-bold text-gray-900">{title}</p>
            <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">
              {description}
            </p>
          </a>
        </div>
       
      </div>
    </div>
  );
};

// ComponentName Component
const OurSerivices = () => {
  const cards = [
    {
      image: "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-1.png",
      title: "How to write content about your photographs",
      description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit quis auctor odio arcu et dolor.",
      category: "Growth",
      readTime: "7",
    },
    {
      image: "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-2.png",
      title: "The best books for capturing a great photograph",
      description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit quis auctor odio arcu et dolor.",
      category: "Books",
      readTime: "8",
    },
    {
      image: "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-3.png",
      title: "10 tips for taking the perfect photo",
      description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit quis auctor odio arcu et dolor.",
      category: "Photography",
      readTime: "6",
    },
    {
      image: "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-3.png",
      title: "Understanding the rule of thirds",
      description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit. Sit quis auctor odio arcu et dolor.",
      category: "Design",
      readTime: "5",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);


  return (
    <div className="">
      <section className="relative bg-gray-50">
        <div className="relative z-10 px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-20 xl:py-28 lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                Our Services ..{" "}
              
            
              </h1>
              <p className="mt-6 text-base font-normal leading-7 text-gray-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula
                massa in enim luctus. Rutrum arcu.
              </p>
              <svg
                className="w-auto h-4 mt-8 text-gray-300"
                viewBox="0 0 172 16"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Path */}
              </svg>
              <p className="mt-8 text-base font-bold text-gray-900">
               Join us and get exclusive deals and resources.
              </p>
              <form
                action="#"
                method="post"
                className="relative mt-4"
              >
                <div className="absolute transitiona-all duration-1000 opacity-30 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                <div className="relative space-y-4 sm:flex sm:space-y-0 sm:items-end">
                  <div className="flex-1">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full px-4 py-3 sm:py-3.5 text-base font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg sm:rounded-l-lg sm:rounded-r-none sm:text-sm focus:ring-gray-900 focus:border-gray-900"
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg sm:rounded-r-lg sm:rounded-l-none hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  >
                    Join Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="pb-8 lg:absolute lg:inset-0 lg:pb-0">
          <div className="flex flex-col items-center justify-center overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
           
            <div className="relative w-full h-full p-6 overflow-x-auto snap-x snap-mandatory">
              <div className="flex space-x-6">
                {cards.map((card, index) => (
                  <Card
                    key={index}
                    image={card.image}
                    title={card.title}
                    description={card.description}
                    category={card.category}
                    readTime={card.readTime}
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};




const Features = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      {/* Our Services Section */}
      <OurSerivices />
      <Testimonials />

      {/* Our Team Section */}
      <section style={{ padding: "40px", textAlign: "center", backgroundColor: "#eaeaea" }}>
        <h2 style={{ fontSize: "3rem", color: "black", marginBottom: "40px" }}>
          Our <span style={{ color: "#4BC2A6" }}>Team</span>
        </h2>
        <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(5, 1fr)", // 5 members per row
            gap: "10px", 
            justifyItems: "center",
            maxWidth: "1000px", // Adjust width for 5 members per row
            margin: "0 auto"
        }}>
          {["Member 1", "Member 2", "Member 3", "Member 4", "Member 5", "Member 6", "Member 7", "Member 8", "Member 9", "Member 10"]
            .slice(0, showAll ? undefined : 5)
            .map((member, index) => (
              <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: "120px", height: "120px", marginBottom: "20px", borderRadius: "50%", backgroundColor: "#ddd" }}></div>
                <p style={{ color: "#000" }}>{member}</p>
              </div>
            ))}
        </div>
        <button onClick={toggleShowAll} style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "transparent", color: "#007bff", border: "none", textDecoration: "underline", cursor: "pointer" }}>
          {showAll ? "Show Less" : "See More"}
        </button>
      </section>
    </>
  );
};

export default Features;