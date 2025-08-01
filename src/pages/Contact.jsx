import React, { useState } from "react";
import { Instagram, Github, X, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from '@emailjs/browser';
import Bracket from "../Animations/Bracket";

// Placeholder Bracket component

// Wrapper for social media icons for consistent styling.
function IconWrapper({ children }) {
  return (
    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors">
      {children}
    </div>
  );
}

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your name');
      return false;
    }
    if (!formData.email.trim()) {
      setErrorMessage('Please enter your email');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please enter a message');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // EmailJS Configuration - Replace with your actual IDs
      const SERVICE_ID = 'service_2doaf5l';        // From Step 2
      const TEMPLATE_ID = 'template_qmr3ufb';      // From Step 3  
      const PUBLIC_KEY = 'L6jEpyroWAOOH2B0B';       // From Step 4
      
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'ashutosh.dureja512@gmail.com'
        },
        PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
      
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact me directly.');
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#efefef] flex flex-col justify-between p-4 sm:p-6 lg:p-8">
      
      {/* Status Messages */}
      {status === 'success' && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 z-50">
          <CheckCircle className="w-5 h-5" />
          Message sent successfully!
        </div>
      )}
      
      {status === 'error' && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 z-50 max-w-sm">
          <AlertCircle className="w-5 h-5" />
          <span className="text-sm">{errorMessage}</span>
        </div>
      )}

      {/* Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-16 md:mt-20 md:mb-24">
        
        {/* Name Input */}
        <div>
          <label className="block text-lg md:text-xl lg:text-[25px]">Your name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full border-b border-black outline-none bg-transparent py-2 focus:border-gray-600 transition-colors"
            placeholder="Itachi"
            disabled={status === 'loading'}
          />
        </div>
        
        {/* Email Input */}
        <div>
          <label className="block text-lg md:text-xl lg:text-[25px]">Your email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full border-b border-black outline-none bg-transparent py-2 focus:border-gray-600 transition-colors"
            placeholder="Itachi@example.com"
            disabled={status === 'loading'}
          />
        </div>
        
        {/* Message Input & Submit Button */}
        <div className="relative">
          <label className="block text-lg md:text-xl lg:text-[25px]">Your message</label>
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full border-b border-black outline-none bg-transparent py-2 pr-24 focus:border-gray-600 transition-colors"
            placeholder="Your message here..."
            disabled={status === 'loading'}
          />
          <button 
            type="button"
            onClick={handleSubmit}
            disabled={status === 'loading'}
            className="absolute bottom-2 right-0 px-4 py-2 text-xs font-semibold uppercase bg-black text-white rounded-full hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1"
          >
            {status === 'loading' ? (
              <>
                <div className="w-3 h-3 border border-white border-t-transparent rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-3 h-3" />
                Submit
              </>
            )}
          </button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between w-full">
        
        {/* Branding Section */}
        <div className="w-full lg:w-auto mb-12 lg:mb-0">
          <Bracket
            text="ASHU"
            className="tracking-[-4px] md:tracking-[-9px] text-center lg:text-left font-[figtree] text-[80px] sm:text-[100px] md:text-[150px] lg:text-[180px] leading-[0.9]"
          />
        </div>

        {/* Contact Details Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 w-full lg:w-auto">
          
          {/* Inquiries */}
          <div>
            <div className="bg-black/20 h-[1px] w-full mb-2"></div>
            <p className="text-gray-500 text-sm">(Inquiries)</p>
            <a
              href="mailto:ashutosh.dureja512@gmail.com"
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
              href="tel:+61430518124"
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
              11 Mebblin Circuit, Sydney
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <div className="bg-black/20 h-[1px] w-full mb-2"></div>
            
            <div className="flex space-x-2 sm:space-x-4 mt-4">
              <a href="https://www.linkedin.com/in/ashutosh-dureja-919072209/" target="_blank" rel="noopener noreferrer">
                <IconWrapper><Linkedin className="w-4 h-4" /></IconWrapper>
              </a>
              <a href="https://github.com/ashudureja?tab=overview&from=2025-06-01&to=2025-06-30" target="_blank" rel="noopener noreferrer">
                <IconWrapper><Github className="w-4 h-4" /></IconWrapper>
              </a>
              <a href="https://www.instagram.com/ashudureja_/" target="_blank" rel="noopener noreferrer">
                <IconWrapper><Instagram className="w-4 h-4" /></IconWrapper>
              </a>
              <a href="https://twitter.com/your_twitter" target="_blank" rel="noopener noreferrer">
                <IconWrapper><X className="w-4 h-4" /></IconWrapper>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;