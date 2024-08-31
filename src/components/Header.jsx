import React from 'react';
import image from "../assets/image.png";

const Header = () => {
    
    return (
        <div className="overflow-x-hidden bg-gray-50">
            <section className="relative py-4 sm:py-6 lg:py-8 xl:pb-0">
                <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">Premium Felt Products for Artisans</h1>
                        <p className="max-w-md mx-auto mt-2 text-base leading-7 text-gray-600 font-inter">Discover high-quality felt materials perfect for your creative projects. Join our community and access exclusive deals and resources.</p>

                        <div className="relative inline-flex mt-4 group">
                            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

                            <a href="/joinwholesale" title="" className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
                                Join Wholesale
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <img className="object-cover object-top w-full h-auto mx-auto" src={image} alt="Felt Products" />
                </div>
            </section>
        </div>
    )
}

export default Header;
