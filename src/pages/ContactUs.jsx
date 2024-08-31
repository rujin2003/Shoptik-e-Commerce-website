import './Services.css';
import React from 'react';
import { FaClock, FaMapMarkerAlt, FaPhoneAlt, FaBriefcase } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ContactHeader = () => {
  const navigate = useNavigate();
  return (
    <section className="relative py-12 bg-white sm:py-16 lg:py-20">
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/5/grid-pattern.png"
          alt="background"
        />
      </div>
      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">Get in Touch with Us</h1>
          <p className="max-w-md mx-auto mt-6 text-base font-normal leading-7 text-gray-500">
            We're here to assist you with any inquiries. Join us for exclusive wholesale services and be part of our growing community.
          </p>
          <div className="mt-8">
            <button
              type="button"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 sm:text-sm text-base sm:py-3.5 font-semibold text-white transition-all duration-200 bg-[#424242] border border-transparent rounded-lg hover:bg-[#333333] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#424242]"
              onClick={() => navigate('/joinwholesale')}
            >
              Join Now
            </button>
          </div>
          <ul className="flex flex-col sm:flex-row items-center justify-center mt-6 space-y-4 sm:space-y-0 sm:space-x-8">
            <li className="flex items-center">
              <FaPhoneAlt className="w-5 h-5 mr-2 text-gray-400" />
              <span className="text-xs font-medium text-gray-900 sm:text-sm">Call us for more information</span>
            </li>
            <li className="flex items-center">
              <FaMapMarkerAlt className="w-5 h-5 mr-2 text-gray-400" />
              <span className="text-xs font-medium text-gray-900 sm:text-sm">Visit us at our office</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const CardsSection = () => (
  <div className="cards-section flex w-full gap-4 pb-8 mt-12 overflow-x-auto sm:mt-16 lg:mt-20 snap-x snap-mandatory scroll-smooth lg:justify-center">
    {[
      {
        icon: <FaClock style={{ color: '#229799' }} className="w-6 h-6 md:w-8 md:h-8" />,
        title: 'Office Hours',
        content: 'Monday-Friday\n8:00 am to 5:00 pm',
      },
      {
        icon: <FaMapMarkerAlt style={{ color: '#229799' }} className="w-6 h-6 md:w-8 md:h-8" />,
        title: 'Our Address',
        content: (
          <a
            href="https://www.google.com/maps/place/8502+Preston+Rd,+Ingle,+Maine+98380,+USA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            8502 Preston Rd. Ingle,<br />
            Maine 98380, USA
          </a>
        ),
      },
      {
        icon: <FaBriefcase style={{ color: '#229799' }} className="w-6 h-6 md:w-8 md:h-8" />,
        title: 'Office 2',
        content: '8502 Preston Rd. Ingle,\nMaine 98380, USA',
      },
      {
        icon: <FaPhoneAlt style={{ color: '#229799' }} className="w-6 h-6 md:w-8 md:h-8" />,
        title: 'Get In Touch',
        content: '+1-246-888-0653\n+1-222-632-0194',
      },
    ].map((card, index) => (
      <div key={index} className="relative snap-start shrink-0 mx-2">
        <div className="overflow-hidden w-[240px] md:w-[260px] lg:w-[280px] transition-all duration-200 transform bg-white border border-gray-200 rounded-2xl hover:shadow-lg hover:-translate-y-1">
          <div className="px-4 py-5 sm:p-5">
            <div className="flex items-start lg:items-center">
              {card.icon}
              <div className="ml-5">
                <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                <p className="mt-2 text-sm font-normal text-gray-600 whitespace-pre-line">
                  {card.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const ContactUs = () => {
  return (
    <>
      <ContactHeader />
      <CardsSection />
    </>
  );
};

export default ContactUs;
