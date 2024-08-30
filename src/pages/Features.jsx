import React, { useState } from "react";
import Blog3 from '../assets/Blog3.webp';
import Testimonials from "../components/Testimonials";



const OurSerivices = () => {        
    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">Make every step user-centric</h2>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">Lorem ipsum dolor sit amet, consectetur adipis elit</p>
        </div>

        <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
            <div className="md:p-8 lg:p-14">
                <svg className="mx-auto" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45 29V23C45 10.85 35.15 1 23 1C10.85 1 1 10.85 1 23V29" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13 29H1V41C1 43.209 2.791 45 5 45H13V29Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M45 29H33V45H41C43.209 45 45 43.209 45 41V29Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Support</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
                <svg className="mx-auto" width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27 27H19V45H27V27Z" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9 37H1V45H9V37Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M45 17H37V45H45V17Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5 17L15 7L23 15L37 1" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M28 1H37V10" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Sales</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200">
                <svg className="mx-auto" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41 1H1V41H41V1Z" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18 7H7V20H18V7Z" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18 26H7V35H18V26Z" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M35 7H24V35H35V7Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Onboarding</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200">
                <svg className="mx-auto" width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.66667 25H6C3.23858 25 1 27.2386 1 30V37C1 39.7614 3.23858 42 6 42H36C38.7614 42 41 39.7614 41 37V30C41 27.2386 38.7614 25 36 25H31.8333C30.2685 25 29 26.2685 29 27.8333C29 29.3981 27.7315 30.6667 26.1667 30.6667H15.3333C13.7685 30.6667 12.5 29.3981 12.5 27.8333C12.5 26.2685 11.2315 25 9.66667 25Z"
                        fill="#D4D4D8"
                    />
                    <path d="M9 9H33" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9 17H33" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1 25H13V31H29V25H41" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M37 1H5C2.79086 1 1 2.79086 1 5V37C1 39.2091 2.79086 41 5 41H37C39.2091 41 41 39.2091 41 37V5C41 2.79086 39.2091 1 37 1Z" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Product</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
                <svg className="mx-auto" width="46" height="42" viewBox="0 0 46 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M30.562 18.4609C30.0511 17.9392 29.4292 17.5392 28.7426 17.2907C28.0559 17.0422 27.3221 16.9516 26.5956 17.0256C25.8692 17.0996 25.1687 17.3362 24.5462 17.718C23.9237 18.0998 23.3952 18.6169 23 19.2309C22.6049 18.6167 22.0764 18.0995 21.4539 17.7176C20.8315 17.3357 20.1309 17.099 19.4044 17.025C18.6779 16.951 17.944 17.0417 17.2573 17.2903C16.5706 17.5389 15.9488 17.939 15.438 18.4609C14.5163 19.4035 14.0002 20.6695 14.0002 21.9879C14.0002 23.3063 14.5163 24.5722 15.438 25.5149L23 33.1999L30.564 25.5159C31.485 24.5726 32.0004 23.3064 32 21.988C31.9997 20.6696 31.4835 19.4037 30.562 18.4609Z"
                        fill="#D4D4D8"
                        stroke="#161616"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M41 41H5C3.93913 41 2.92172 40.5786 2.17157 39.8284C1.42143 39.0783 1 38.0609 1 37V1H17L22 9H45V37C45 38.0609 44.5786 39.0783 43.8284 39.8284C43.0783 40.5786 42.0609 41 41 41Z"
                        stroke="#161616"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Quality</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
            </div>

            <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t">
                <svg className="mx-auto" width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25 7C34.941 7 43 15.059 43 25C43 34.941 34.941 43 25 43C15.059 43 7 34.941 7 25" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19 1C9.059 1 1 9.059 1 19H19V1Z" fill="#D4D4D8" stroke="#161616" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <h3 className="mt-12 text-xl font-bold text-gray-900 font-pj">Result</h3>
                <p className="mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
            </div>
        </div>
    </div>
</section>

    )
}


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
const AboutHeader = () => {
  const cards = [
    {
      image: "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-1.png",
      title: "From Sheep to Softness",
      description: "Every journey begins with a single step, or in our case, a single strand of wool. Felt has been the heart of our craft, turning the raw and untamed into something you can hold close. It’s not just material—it’s a connection to the earth, to tradition, to you.",
      category: "Growth",
      readTime: "7",
    },
    {
      image: "https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/4/thumbnail-2.png",
      title: "Every Stitch Tells a Story",
      description: "In every stitch, there’s a story. It’s about the sheep that gave its wool, the artisans who shaped it, and the hands that will hold it. When you choose us, you’re choosing to be a part of that story—a story woven with care, connection, and creativity.",
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
                About us {" "}
              
            
              </h1>
              <p className="mt-6 text-base font-normal leading-7 text-gray-900">
              At Aaha Felt, we transform wool into timeless felt creations. Rooted in tradition but innovating for the future, we craft each piece with care and artistry. Our felt products aren’t just items—they’re stories of connection between nature, craftsmanship, and you. Join us in celebrating the beauty and versatility of felt. Let’s create something special together.

This version is concise while still capturing the essence of your brand.
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
      <AboutHeader/>
      <Testimonials />

      <OurSerivices/>

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