import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
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
    <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-5 max-w-[1200px] mx-auto transition-all duration-300 font-sans antialiased tracking-tight ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-[24px] border-b border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.03)]' 
        : 'bg-transparent border-transparent'
    }`}>
      <a href="/" className="text-xl font-extrabold text-black tracking-tighter font-display">
        Axero<span className="text-gray-400">AI</span>
      </a>
      
      <div className="hidden md:flex items-center gap-10">
        {navItems.map((item) => (
          <a 
            key={item.name}
            className="text-[13px] text-gray-500 font-medium hover:text-black transition-colors duration-300" 
            href={item.href}
          >
            {item.name}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:block bg-black text-white px-5 py-2 rounded-lg text-[13px] font-semibold active:scale-95 transition-all hover:bg-black/90">
          Get Access <ChevronRight size={14} className="inline-block ml-1" />
        </button>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-black focus:outline-none"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 mt-4 mx-8 bg-white border border-black/5 shadow-2xl rounded-2xl p-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-bold text-gray-400 hover:text-black transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-6 border-t border-black/5">
                <button className="w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2">
                  Get Access <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
