import { Instagram, Facebook, X, Linkedin, Youtube } from "lucide-react";

export default function Contact2() {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col justify-between  px-6 md:px-20 py-16 font-sans">
        <div></div>
      {/* Top Logo and Nav */}
      

      {/* Contact Heading */}
     <div>
         <div className="text-6xl md:text-[130px]  mb-20">(CONTACT)</div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-300 pt-6">
        {/* Left column */}
        <div className="space-y-8">
          <div>
            <p className="text-gray-400 text-sm">(Inquiries)</p>
            <a
              href="mailto:john@jt-studio.com"
              className="underline text-base font-medium block mt-1"
            >
              john@jt-studio.com
            </a>
          </div>
          <div>
            <p className="text-gray-400 text-sm">(Address)</p>
            <p className="text-base font-medium mt-1">
              Herengracht 386, 1016 CJ Amsterdam
            </p>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-8">
          <div>
            <p className="text-gray-400 text-sm">(Phone)</p>
            <a href="tel:+49123456789" className="underline text-base font-medium mt-1 block">
              +491234 56789
            </a>
          </div>

          <div className="flex space-x-4 mt-4">
            <IconWrapper><Instagram className="w-4 h-4" /></IconWrapper>
            <IconWrapper><Facebook className="w-4 h-4" /></IconWrapper>
            <IconWrapper><X className="w-4 h-4" /></IconWrapper>
            <IconWrapper><Linkedin className="w-4 h-4" /></IconWrapper>
            <IconWrapper><Youtube className="w-4 h-4" /></IconWrapper>
          </div>
        </div>
      </div>
     </div>
    </div>
  );
}

function IconWrapper({ children }) {
  return (
    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
      {children}
    </div>
  );
}
