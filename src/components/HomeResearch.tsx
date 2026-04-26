import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, ChevronRight, BookOpen } from 'lucide-react';
import researchData from '../content/research/research.json';

export default function HomeResearch() {
  // We take the first 3 research items
  const latestResearch = researchData.slice(0, 3);

  return (
    <section className="py-24 relative overflow-hidden bg-surface/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-[1px] bg-primary"></div>
              <span className="section-label !mb-0 tracking-[0.3em]">Scientific Frontiers</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none"
            >
              Research.
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a href="/research" className="premium-button premium-button-secondary group/btn">
              View All Research
              <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
            </a>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {latestResearch.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <a href={`/research/${item.slug}`} className="group block h-full">
                {item.image ? (
                  <div className="relative aspect-video rounded-2xl md:rounded-3xl overflow-hidden border border-outline bg-surface-accent shadow-xl transition-all duration-500 group-hover:shadow-primary/15 group-hover:border-primary/40 mb-8 font-serif">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity"></div>
                    
                    <div className="absolute top-4 left-4 md:top-6 md:left-6">
                       <div className="bg-background/90 backdrop-blur-md border border-outline px-3 py-1.5 rounded-lg">
                          <span className="text-[9px] md:text-[10px] font-mono text-primary uppercase tracking-[0.2em] font-bold">
                            {item.category}
                          </span>
                       </div>
                    </div>
                  </div>
                ) : (
                  <div className="mb-8 p-8 aspect-video rounded-2xl md:rounded-3xl border border-outline border-dashed bg-surface/30 flex flex-col justify-center gap-4 group-hover:border-primary/40 transition-colors">
                     <div className="bg-background/90 border border-outline px-3 py-1.5 rounded-lg w-fit">
                        <span className="text-[9px] md:text-[10px] font-mono text-primary uppercase tracking-[0.2em] font-bold">
                          {item.category}
                        </span>
                     </div>
                     <div className="flex items-center gap-2 text-[9px] md:text-[10px] font-mono text-on-surface-muted uppercase tracking-widest">
                        <BookOpen size={12} className="text-primary" />
                        Research Publication
                      </div>
                  </div>
                )}
                
                <div className="space-y-4 px-1">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-on-surface-muted uppercase tracking-[0.2em]">
                    <span>{new Date(item.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed text-sm font-light line-clamp-2 md:line-clamp-3">
                    {item.excerpt}
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-[10px] font-mono text-primary uppercase tracking-[0.3em] font-bold">
                    Read Paper <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
