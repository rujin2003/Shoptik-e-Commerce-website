import React from 'react';
import { BsTelephone, BsBuilding } from "react-icons/bs";
import { AiOutlineFacebook, AiFillTwitterSquare, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import aahafeltlogo from "../assets/aahafeltlogo.png"; // Make sure to replace this path with the correct one for your project

const Footer = () => {
  return (
    <footer className="container mx-auto mt-28 grid grid-cols-1 space-y-10 bg-primary px-5 py-8 tracking-wider text-white md:mt-28 md:grid-cols-4 md:space-y-0 xl:px-28 xl:py-20">
      {/* Aaha Felt */}
      <section className="space-y-4">
        <img src={aahafeltlogo} alt="Aaha Felt Logo" className="h-16 w-auto"/>
        <p className="w-2/3 text-sm font-light">
          Explore the various kind of products for your Home, office, and Room.
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
            <span><BsTelephone /></span>
            <span>+977 9851043414</span>
          </p>
          <p className="flex items-center space-x-1">
            <span><FiMail /></span>
            <span>aahafelt@gmail.com</span>
          </p>
          <p className="flex items-center space-x-1">
            <span><BsBuilding /></span>
            <span>Tokha 44600, Nepal</span>
          </p>
          <div className="flex space-x-6">
            <a href="#" aria-label="Facebook">
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
          <h2 className="uppercase">Useful links</h2>
          <div className="w-1/6 border-t"></div>
        </div>
        <div className="flex flex-col space-y-4 text-sm font-light">
          <a href="#" className="hover:text-white/80">About Us</a>
          <a href="#" className="hover:text-white/80">Contact us</a>
          <a href="#" className="hover:text-white/80">Privacy Policy</a>
          <a href="#" className="hover:text-white/80">Terms & Conditions</a>
        </div>
      </section>

      {/* Location */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="uppercase">Location</h2>
          <div className="w-1/6 border-t"></div>
        </div>
        <div className="mt-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14123.81109662184!2d85.3214008!3d27.7496026!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190882e73a45%3A0x49e655f5009b4fef!2sAAHA%20FELT%20UDHYOG!5e0!3m2!1sen!2sin!4v1721568609652!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
