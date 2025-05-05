import { useState } from "react";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/utils";
import { motion } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-red-500 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="flex items-center">
                <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8-2h4v2h-4V4zM5 18V9h14v9H5z"/>
                </svg>
                <span className="ml-2 text-xl font-bold text-white">CloudTask</span>
              </a>
            </div>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <a 
                onClick={() => handleNavClick('features')} 
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-white hover:text-gray-200 transition cursor-pointer"
              >
                Features
              </a>
              <a 
                onClick={() => handleNavClick('testimonials')} 
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-white hover:text-gray-200 transition cursor-pointer"
              >
                Testimonials
              </a>
              <a 
                onClick={() => handleNavClick('pricing')} 
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-white hover:text-gray-200 transition cursor-pointer"
              >
                Pricing
              </a>
              <a 
                onClick={() => handleNavClick('faq')} 
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-white hover:text-gray-200 transition cursor-pointer"
              >
                FAQ
              </a>
            </nav>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white hover:text-gray-200 transition">
              Log in
            </a>
            <Button className="ml-3" variant="default">
              Get Started
            </Button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button 
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary" 
              aria-expanded={mobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="sm:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="pt-2 pb-3 space-y-1">
            <a 
              onClick={() => handleNavClick('features')} 
              className="block pl-3 pr-4 py-2 border-l-4 border-primary text-base font-medium text-primary-700 bg-primary-50 cursor-pointer"
            >
              Features
            </a>
            <a 
              onClick={() => handleNavClick('testimonials')} 
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 cursor-pointer"
            >
              Testimonials
            </a>
            <a 
              onClick={() => handleNavClick('pricing')} 
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 cursor-pointer"
            >
              Pricing
            </a>
            <a 
              onClick={() => handleNavClick('faq')} 
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 cursor-pointer"
            >
              FAQ
            </a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4 flex-col">
              <a href="#" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">Log in</a>
              <div className="mt-3 w-full">
                <Button className="w-full" variant="default">Get Started</Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
