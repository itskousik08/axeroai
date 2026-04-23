import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Vision() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1]);
  const blur = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ["10px", "0px", "0px", "10px"]);

  return (
    <section ref={containerRef} className="py-60 relative overflow-hidden bg-background">
      {/* Background Cinematic FX */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute inset-0 z-0">
         <motion.div 
           style={{ opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.3, 0.1]) }}
           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-primary/10 rounded-full blur-[160px]"
         />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 text-center">
        <motion.div 
          style={{ opacity, scale, filter: `blur(${blur})` }}
          className="space-y-16"
        >
           <div className="section-label justify-center">Our Thesis</div>
           
           <h2 className="text-5xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.95] max-w-5xl mx-auto">
              "AI is only valuable when it's in the hands of people <span className="premium-gradient-text">building real systems."</span>
           </h2>
           
           <div className="space-y-8">
              <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-2xl mx-auto leading-relaxed">
                Our mission is to close the gap between theoretical potential and practical resilience — shipping infrastructure that operates with the reliability of a utility.
              </p>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <a href="/company" className="premium-button premium-button-primary px-12 py-6 text-xl">
                  Read Our Manifestoe
                </a>
              </motion.div>
           </div>
        </motion.div>
      </div>
      
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
    </section>
  );
}
