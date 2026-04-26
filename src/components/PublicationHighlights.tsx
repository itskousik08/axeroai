import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import PremiumCard from './PremiumCard';

const publications = [
  {
    title: "The Agentic Shift",
    category: "Architecture",
    year: "2025",
    desc: "A technical thesis on the transition from passive software to active autonomous agents."
  },
  {
    title: "Neural Synergy Protocols",
    category: "Network",
    year: "2024",
    desc: "Exploring decentralized coordination models for high-density AI clusters."
  }
];

export default function PublicationHighlights() {
  return (
    <section className="py-40 border-t border-outline bg-surface/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div className="section-label">Publications</div>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight">
              Theoretical<br/>Frameworks.
            </h2>
            <p className="text-xl text-on-surface-variant font-light leading-relaxed max-w-lg">
              We don't just build. We define the protocols and principles that guide the next era of digital intelligence.
            </p>
            <div className="pt-6">
               <a href="/research" className="premium-button premium-button-secondary gap-3">
                  <BookOpen size={18} />
                  View all publications
               </a>
            </div>
          </div>

          <div className="grid gap-6">
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                 <PremiumCard className="hover:bg-primary/5 group cursor-pointer">
                    <div className="flex justify-between items-start mb-6">
                       <div className="space-y-2">
                          <span className="font-mono text-[10px] text-primary uppercase tracking-widest">{pub.category}</span>
                          <h3 className="text-3xl font-bold group-hover:text-primary transition-colors">{pub.title}</h3>
                       </div>
                       <span className="font-mono text-xs text-on-surface-muted border border-outline px-2 py-1 rounded">{pub.year}</span>
                    </div>
                    <p className="text-on-surface-variant text-base leading-relaxed mb-8">
                       {pub.desc}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-mono text-on-surface-muted uppercase tracking-widest group-hover:text-white transition-colors">
                       Read Manuscript <ArrowUpRight size={14} />
                    </div>
                 </PremiumCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
