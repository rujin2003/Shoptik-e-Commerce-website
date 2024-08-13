    import React from 'react'
    import Blog_01 from "../assets/Blog1.webp"
    import Blog_02 from "../assets/Blog2.webp"
    import Blog_03 from "../assets/Blog3.webp"
    import logo1 from "../assets/partnerLogo1.png"
    import logo2 from "../assets/partnerLogo2.png"
    import logo3 from "../assets/partnerLogo3.png"
    import { BsTelephone, BsBuilding } from "react-icons/bs"
    import {
      AiOutlineFacebook,
      AiFillTwitterSquare,
      AiOutlineLinkedin,
      AiOutlineInstagram,
    } from "react-icons/ai"
    import { FiMail } from "react-icons/fi"

    const blog_data = [
      {
        id: 1,
        title: "Furniture Decoration idea",
        date: "October 20, 2022",
        image: Blog_01,
      },
    
      {
        id: 2,
        title: "Decorate your idea in house",
        date: "November 03, 2022",
        image: Blog_02,
      },
      {
        id: 3,
        title: "Dining Table decorate",
        date: "December 15, 2022",
        image: Blog_03,
      },
    ]

    const Footer = () => {
      return (
        <>
          <footer className="container mx-auto mt-28 grid grid-cols-1 space-y-10 bg-primary px-5 py-8 tracking-wider text-white md:mt-28 md:grid-cols-4 md:space-y-0 xl:px-28 xl:py-20 ">
            {/* Shoptik */}
            <section className="space-y-4">
              <h1 className="text-4xl font-black tracking-wider">AahaFelt.</h1>
              <p className="w-2/3 text-sm font-light">
                Explore the various kind of products for your Home, office and
                Room.
              </p>
            </section>

            {/* Contact us */}
            <section className="space-y-6">
              <div className="space-y-1">
                <h2 className="uppercase ">Contact us</h2>
                <div className="w-1/6 border-t"></div>
              </div>
              <div className="space-y-4 text-sm font-light">
                <p className="flex items-center space-x-1">
                  <span>
                    {" "}
                    <BsTelephone />{" "}
                  </span>
                  <span> (+977) 985104341</span>
                </p>
                <p className="flex items-center space-x-1">
                  <span>
                    {" "}
                    <FiMail />{" "}
                  </span>
                  <span> aahafelt@gmail.com</span>
                </p>
                <p className="flex items-center space-x-1">
                  <span>
                    {" "}
                    <BsBuilding />{" "}
                  </span>
                  <span> Tokha 44600, Nepal</span>
                </p>
                <div className="flex space-x-6">
                  <a href="https://www.facebook.com/aaha.felt" aria-label="Facebook">
                    <AiOutlineFacebook className="h-5 w-5" />
                  </a>
                  <a href="#" aria-label="Twitter">
                    <AiFillTwitterSquare className="h-5 w-5" />
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <AiOutlineLinkedin className="h-5 w-5" />
                  </a>
                  <a href="#" aria-label="Instagram">
                    <AiOutlineInstagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </section>

            {/* Useful links */}
            
            <section className="space-y-6">
              <div className="space-y-1">
                <h2 className="uppercase ">Userful links</h2>
                <div className="w-1/6 border-t"></div>
              </div>
              <div className="flex flex-col space-y-4 text-sm font-light">
                <a href="#" className="hover:text-white/80">
                About Aaha Felt
                </a>
                <a href="#" className="hover:text-white/80">
                  Contact us
                </a>
              
                <a href="#" className="hover:text-white/80">
                  Supports
                </a>
                <a href="/gallery" className="hover:text-white/80">
                 Gallery
                </a>
                <a href="#" className="hover:text-white/80">
                  Privacy Policy
                </a>
              </div>
            </section>
 {/* Partners section */}
<section className="space-y-2">
  <div className="space-y-1">
    <h2 className="uppercase">Our Partners</h2>
    <div className="w-1/6 border-t"></div>
  </div>
  <div className="flex flex-col">
    <img
      src={logo1}
      alt="Partner 1"
      className="h-18 w-24 object-contain mb-2"
    />
    <img
      src={logo2}
      alt="Partner 2"
      className="h-18 w-24 object-contain mb-2"
    />
    <img
      src={logo3}
      alt="Partner 3"
      className="h-18 w-24 object-contain"
    />
  </div>
</section>

           
          </footer>
        </>
      )
    }

    export default Footer