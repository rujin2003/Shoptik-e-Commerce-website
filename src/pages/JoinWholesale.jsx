import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const JoinWholesale = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [captchaVerified, setCaptchaVerified] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (captchaVerified) {
            // Add your form submission logic here
            setFormSubmitted(true);
        } else {
            alert("Please verify the captcha.");
        }
    };

    const onCaptchaChange = (value) => {
        console.log("Captcha value:", value);
        setCaptchaVerified(true);
    };

    return (
        <div className="bg-gray-50">
            <section className="relative py-12 sm:py-16 lg:pb-40">
                <div className="absolute bottom-0 right-0 overflow-hidden">
                    <img className="w-[600px] h-[600px] origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75" src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png" alt="" />
                </div>

                <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
        <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight font-pj">
                Join Us Wholesale and Be Our Partner
            </h1>
            <p className="mt-2 text-base text-gray-600 sm:mt-4 font-inter">
                Contact us through the form below for more information.
            </p>
        </div>
        <img className="w-[400px] h-[400px] object-cover" src="https://d33wubrfki0l68.cloudfront.net/d6f1462500f7670e0db6b76b35054a081679a5a0/0ce15/images/hero/5.1/illustration.png" alt="" />
    </div>
</div>

            </section>

            {/* Form Section */}
            <section className="py-12 bg-white sm:py-16 lg:py-24">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-10 ">Become a Partner</h2>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                                    <input type="text" id="firstName" name="firstName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                                </div>

                                <div>
                                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                                    <input type="text" id="lastName" name="lastName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                                </div>
                            </div>

                            <div>

                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                                <input type="text" id="address" name="address" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                            </div>

                            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                                <div>
                                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                                    <input type="text" id="companyName" name="companyName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
                                </div>

                                <div>
                                    <label htmlFor="companyAddress" className="block text-sm font-medium text-gray-700">Company Address (Optional)</label>
                                    <input type="text" id="companyAddress" name="companyAddress" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description About Your Work</label>
                                <textarea id="description" name="description" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required></textarea>
                            </div>

                            <div>
                                <ReCAPTCHA
                                    sitekey="6LfYbTMqAAAAAIwId5tb8r1zNoaAY-8PV-bUD-DU"
                                    onChange={onCaptchaChange}
                                />
                                <button type="submit" className="inline-flex items-center px-6 py-3 mt-4 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Submit
                                </button>
                            </div>
                        </form>

                        {formSubmitted && (
                            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-md">
                                Your response has been recorded.
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JoinWholesale;
