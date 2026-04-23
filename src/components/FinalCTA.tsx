import React from 'react';
import { motion } from 'framer-motion';
import MotionSection from './MotionSection';

export default function FinalCTA() {
  return (
    <section className="py-40 px-6 md:px-10">
       <MotionSection direction="up" className="max-w-7xl mx-auto">
          <div className="bg-primary rounded-[3rem] p-12 md:p-32 text-center relative overflow-hidden shadow-[0_0_100px_rgba(46,91,255,0.3)]">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] opacity-30"></div>
             <div className="absolute top-0 left-0 w-full h-full noise-overlay opacity-20"></div>
             
             <div className="relative z-10 space-y-12">
                <div className="font-mono text-[11px] text-white/50 uppercase tracking-[0.5em] font-black">Sync Initialization</div>
                <h2 className="text-6xl md:text-[8.5rem] font-extrabold text-white tracking-tighter leading-[0.8] mb-12">Ready to <br/> scale?</h2>
                <p className="text-2xl text-white/70 font-light max-w-2xl mx-auto leading-relaxed">
                   Whether you're developing a custom agentic system or integrating a complete neural stack — our engineering unit is ready.
                </p>
                
                <div className="flex flex-wrap justify-center gap-8 pt-8">
                   <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="/contact" 
                      className="bg-white text-primary px-16 py-7 rounded-2xl font-bold text-xl hover:bg-zinc-100 transition-all shadow-2xl flex items-center justify-center min-w-[240px]"
                   >
                      Start Project
                   </motion.a>
                   <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="/careers" 
                      className="bg-transparent border-2 border-white/30 text-white px-16 py-7 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all min-w-[240px]"
                   >
                      Join Build Cycle
                   </motion.a>
                </div>
             </div>
          </div>
       </MotionSection>
    </section>
  );
}
