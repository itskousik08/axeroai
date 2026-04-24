import React from 'react';
import { motion } from 'framer-motion';
import PremiumCard from './PremiumCard';

const units = [
  { id: "01", title: "AI Products", desc: "Autonomous systems that reason, plan, and execute complex workflows without constant human supervision.", tags: ["LLM Integration", "Multi-agent", "RAG Systems"] },
  { id: "02", title: "Automation Systems", desc: "High-performance robotic process automation and pipeline orchestration to eliminate repetitive work.", tags: ["Process Mining", "API Automation", "Scheduling"] },
  { id: "03", title: "Web Platforms", desc: "Production-grade web products with clean architecture, modern stacks, and high-end UX.", tags: ["React", "Supabase", "Edge Functions"] },
  { id: "04", title: "Labs & Experiments", desc: "Pushing boundaries in human-computer interaction and novel interface paradigms.", tags: ["Prototyping", "Fine-tuning", "Novel UI"] }
];

export default function Capabilities() {
  return (
    <section id="solutions" className="py-40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="lg:sticky lg:top-40 space-y-8">
            <div className="section-label">Core Capabilities</div>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none">
              Four disciplines.<br/>One system.
            </h2>
            <p className="text-xl text-on-surface-variant font-light leading-relaxed max-w-md">
              AxeroAI doesn't build in one direction. We architect complete intelligence stacks — from the model layer to the interface layer.
            </p>
            
            <div className="pt-10 hidden lg:block">
               <div className="flex flex-col gap-4">
                  {units.map((u) => (
                    <div key={u.id} className="flex items-center gap-4 group cursor-default">
                       <div className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-all group-hover:scale-150"></div>
                       <span className="font-mono text-xs text-on-surface-muted group-hover:text-white transition-colors">{u.title}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="space-y-8">
            {units.map((unit, i) => (
              <motion.div
                key={unit.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <PremiumCard className="hover:border-primary border-l-4 border-l-transparent hover:border-l-primary">
                  <span className="font-mono text-[11px] text-primary mb-4 block tracking-widest uppercase">{unit.id} / System Unit</span>
                  <h3 className="text-3xl font-bold mb-4">{unit.title}</h3>
                  <p className="text-on-surface-variant text-lg font-light leading-relaxed mb-8">{unit.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {unit.tags.map(tag => (
                      <span key={tag} className="font-mono text-[10px] text-on-surface-muted bg-surface-accent border border-outline px-3 py-1.5 rounded-md uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
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
