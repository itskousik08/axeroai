import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Solutions', href: '#' },
    { name: 'Ventures', href: '#' },
    { name: 'Process', href: '#' },
    { name: 'About', href: '#' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-5 max-w-[1200px] mx-auto transition-all duration-300 font-['Inter'] antialiased tracking-tight ${
      scrolled 
        ? 'bg-[#0A0A0A]/80 backdrop-blur-[20px] border-b border-white/5 shadow-[0_20px_50px_rgba(46,91,255,0.1)]' 
        : 'bg-transparent border-transparent'
    }`}>
      <div className="text-2xl font-black text-white tracking-tighter">AxeroAI</div>
      
      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a 
            key={item.name}
            className="text-gray-400 font-medium hover:text-white transition-colors duration-300" 
            href={item.href}
          >
            {item.name}
          </a>
        ))}
      </div>

      <button className="bg-[#2E5BFF] text-white px-6 py-2 rounded-lg font-semibold active:scale-95 transition-transform hover:bg-[#2E5BFF]/90">
        Contact Us
      </button>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-400 hover:text-white focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-0 right-0 mt-4 mx-8 glass-card rounded-2xl p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-gray-400 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full bg-[#2E5BFF] text-white py-3 rounded-lg font-semibold mt-4">
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
