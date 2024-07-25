import React, { useRef } from 'react';
import BasketImage from "../assets/basketChair.webp";
import Blog1 from "../assets/Blog1.webp";
import Blog2 from "../assets/Blog2.webp";
import Blog3 from "../assets/Blog3.webp";
import { View_button } from "../components";

const StylishContainer = () => {
  const articles = [
    { id: 1, img: Blog1, title: "Feel the Luxury", description: "Immerse yourself in the superior quality of our felt creations." },
    { id: 2, img: Blog2, title: "Handcrafted Excellence", description: "Our felt products are made with meticulous attention to detail." },
    { id: 3, img: Blog3, title: "Timeless Elegance", description: "Experience the perfect blend of tradition and modernity in our felt designs." }
  ];

  return (
    <div className="space-y-6">
      {articles.map(article => (
        <div key={article.id} className="relative flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-48 group rounded-xl hover:shadow-lg hover:-translate-y-1">
          <a href="#" title={article.title} className="flex shrink-0 aspect-w-4 aspect-h-3">
            <img className="object-cover w-full h-full transition-all duration-200 transform group-hover:scale-110" src={article.img} alt={article.title} />
          </a>
          <div className="flex-1 px-4 py-5 sm:p-6">
            <a href="#" title={article.title}>
              <p className="text-lg font-bold text-gray-900">{article.title}</p>
              <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">{article.description}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

const Basket = () => {
  const containerRef = useRef(null);
  let startX = 0;
  let scrollLeft = 0;

  const handleTouchStart = (e) => {
    startX = e.touches[0].pageX - containerRef.current.offsetLeft;
    scrollLeft = containerRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = x - startX;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="container relative mx-auto mt-20 flex flex-col-reverse md:flex-row items-center justify-between bg-gray-100 px-5 py-5 md:mt-48 md:py-8 lg:py-10 xl:px-28 xl:py-16">
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
          }
          .card-container {
            display: flex;
            overflow-x: scroll;
            scroll-snap-type: x mandatory;
          }
          .card {
            scroll-snap-align: start;
            flex-shrink: 0;
            width: 80%;
            max-width: 300px;
            margin-right: 16px;
            transition: transform 0.3s;
          }
          .card:hover {
            transform: scale(1.05);
          }
        `}
      </style>

      <div className="space-y-2 pt-10 md:pt-0">
        <h2 className="w-2/3 font-light uppercase tracking-widest md:w-full md:text-2xl xl:text-4xl">
          <span className="font-black"> Premium </span> Felt Creations
        </h2>
        <View_button title="view now" />
      </div>

      <div 
        ref={containerRef}
        className="flex space-x-6 overflow-x-auto pt-10 md:pt-0 scrollbar-hide card-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className="relative flex-shrink-0 w-60 md:w-80 bg-white border border-gray-100 shadow rounded-xl card">
          <img className="object-cover w-full h-40 transition-transform duration-200 transform group-hover:scale-110" src={Blog1} alt="Blog 1" />
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-900">Felt Craftsmanship</h3>
            <p className="mt-3 text-sm font-normal text-gray-500">Dive into the world of felt and discover the intricate craftsmanship behind each piece.</p>
          </div>
        </div>
        <div className="relative flex-shrink-0 w-60 md:w-80 bg-white border border-gray-100 shadow rounded-xl card">
          <img className="object-cover w-full h-40 transition-transform duration-200 transform group-hover:scale-110" src={Blog2} alt="Blog 2" />
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-900">Artisan Quality</h3>
            <p className="mt-3 text-sm font-normal text-gray-500">Explore the unparalleled quality of our artisan-made felt products, crafted with care and precision.</p>
          </div>
        </div>
        <div className="relative flex-shrink-0 w-60 md:w-80 bg-white border border-gray-100 shadow rounded-xl card">
          <img className="object-cover w-full h-40 transition-transform duration-200 transform group-hover:scale-110" src={Blog3} alt="Blog 3" />
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-900">Elegance in Felt</h3>
            <p className="mt-3 text-sm font-normal text-gray-500">Discover how our felt products bring a touch of elegance and sophistication to any space.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Basket;
