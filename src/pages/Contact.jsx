import React from "react";
import { Instagram, Facebook, X, Linkedin, Youtube } from "lucide-react";
import Bracket from "../Animations/Bracket";

// Placeholder for the Bracket component since its code was not provided.
// This component mimics the props used in your original code.


// Wrapper for social media icons for consistent styling.
function IconWrapper({ children }) {
  return (
    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
      {children}
    </div>
  );
}

const Contact = () => {
  return (
    // Main container: Use min-h-screen to ensure it can grow, and responsive padding.
    <div className="min-h-screen w-full bg-[#efefef] flex flex-col justify-between p-4 sm:p-6 lg:p-8">
      
      {/* Form Section: Stacks to 1 column on mobile, 3 on desktop. Margins and gaps are responsive. */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-16 md:mt-20 md:mb-24">
        
        {/* Name Input */}
        <div>
          <label className="block text-lg md:text-xl lg:text-[25px]">Your name</label>
          <input
            type="text"
            className="w-full border-b border-black outline-none bg-transparent py-2"
            placeholder="Itachi"
          />
        </div>
        
        {/* Email Input */}
        <div>
          <label className="block text-lg md:text-xl lg:text-[25px]">Your email</label>
          <input
            type="email"
            className="w-full border-b border-black outline-none bg-transparent py-2"
            placeholder="Itachi@example.com"
          />
        </div>
        
        {/* Message Input & Submit Button */}
        <div className="relative">
          <label className="block text-lg md:text-xl lg:text-[25px]">Your message</label>
          <input
            type="text"
            className="w-full border-b border-black outline-none bg-transparent py-2 pr-24" // Added padding-right to prevent text from going under the button
            placeholder="Your message here..."
          />
          <button className="absolute bottom-2 right-0 px-4 py-2 text-xs font-semibold uppercase bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
            Submit
          </button>
        </div>
      </div>

      {/* Bottom Section: Stacks vertically on mobile/tablet, becomes a row on large screens. */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full">
        
        {/* Branding Section */}
        <div className="w-full lg:w-auto mb-12 lg:mb-0">
          <Bracket
            text="ASHU"
            className="tracking-[-4px] md:tracking-[-9px] text-center lg:text-left font-[figtree] text-[80px] sm:text-[100px] md:text-[150px] lg:text-[180px] leading-[0.9]"
          />
        </div>

        {/* Contact Details Section: Stacks to 1 column on mobile, 2 on medium screens. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 w-full lg:w-auto">
          
          {/* Inquiries */}
          <div>
            <div className="bg-black/20 h-[1px] w-full mb-2"></div>
            <p className="text-gray-500 text-sm">(Inquiries)</p>
            <a
              href="mailto:john@jt-studio.com"
              className="underline text-base font-medium block mt-1 hover:text-gray-700"
            >
              ashutosh.dureja512@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div>
            <div className="bg-black/20 h-[1px] w-full mb-2"></div>
            <p className="text-gray-500 text-sm">(Phone)</p>
            <a
              href="tel:+49123456789"
              className="underline text-base font-medium mt-1 block hover:text-gray-700"
            >
              0430518124
            </a>
          </div>

          {/* Address */}
          <div>
            <div className="bg-black/20 h-[1px] w-full mb-2"></div>
            <p className="text-gray-500 text-sm">(Address)</p>
            <p className="text-base font-medium mt-1">
              11 Mebblin Circuit , Sydney
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <div className="bg-black/20 h-[1px] w-full mb-2"></div>
            
            <div className="flex space-x-2 sm:space-x-4 mt-4">
              <IconWrapper><Instagram className="w-4 h-4" /></IconWrapper>
              <IconWrapper><Facebook className="w-4 h-4" /></IconWrapper>
              <IconWrapper><X className="w-4 h-4" /></IconWrapper>
              <IconWrapper><Linkedin className="w-4 h-4" /></IconWrapper>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;