import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/aahafeltLogo.png";

const Logo = ({ className }) => {
  return (
    <Link to="/">
      <div className={`relative flex pr-3 ${className}`}>
        <img 
          src={logo}
          alt="Shoptik Logo" 
          className="h-16 w-auto md:h-20" 
        />
      
      </div>
    </Link>
  );
};
export default Logo;