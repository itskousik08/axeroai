import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

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

  const navLinks = [
    { label: 'Products', href: '/products' },
    { label: 'Labs', href: '/labs' },
    { label: 'Intelligence', href: '/blog' },
    { label: 'Company', href: '/company' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        scrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className={`max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between transition-all duration-700 ${
        scrolled ? 'bg-background/40 backdrop-blur-3xl border border-outline rounded-2xl mx-1 md:mx-6 py-3 px-6 md:px-8 shadow-2xl' : 'bg-transparent'
      }`}>
        <motion.a 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          href="/" 
          className="flex items-center gap-2.5 group"
        >
          <span className="text-2xl font-display font-extrabold tracking-tighter text-white">
            Axero<span className="text-primary group-hover:text-white transition-colors">AI</span>
          </span>
          <div className="hidden sm:flex px-2 py-0.5 rounded border border-primary/20 bg-primary/5 text-[8px] font-mono font-bold text-primary uppercase tracking-widest mt-1">
            Build 025.A
          </div>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              href={link.href}
              className="relative text-sm font-medium text-on-surface-variant hover:text-white transition-colors group px-1 py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <a href="/contact" className="premium-button premium-button-primary px-6 py-2.5 text-xs font-mono uppercase tracking-widest gap-2 group">
              Start Project
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden w-10 h-10 flex items-center justify-center text-white bg-white/5 border border-outline rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[99] lg:hidden bg-background flex flex-col p-8 pt-32"
          >
            <div className="grid-bg opacity-20"></div>
            <div className="space-y-12 relative z-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  href={link.href}
                  className="block text-4xl font-extrabold tracking-tight text-white hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              
              <div className="pt-12 border-t border-outline flex flex-col gap-6">
                 <a href="/contact" className="premium-button premium-button-primary w-full py-5 text-lg">Initialize Node</a>
                 <div className="flex gap-6 mt-4">
                    {['X', 'Github', 'LinkedIn'].map(s => (
                      <span key={s} className="text-xs font-mono text-on-surface-muted hover:text-primary cursor-pointer transition-colors uppercase tracking-widest">{s}</span>
                    ))}
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
