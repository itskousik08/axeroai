import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Ship, TrendingUp } from 'lucide-react';

const steps = [
  { 
    icon: Search, 
    title: "Think", 
    desc: "Deep research and feasibility analysis. We deconstruct problems before building.",
    color: "#2E5BFF" 
  },
  { 
    icon: PenTool, 
    title: "Build", 
    desc: "Rapid prototyping and high-fidelity engineering. Fast iterations, clean architecture.",
    color: "#00C896" 
  },
  { 
    icon: Ship, 
    title: "Ship", 
    desc: "Production-grade deployment with observability and real-world resilience.",
    color: "#BB80FF" 
  },
  { 
    icon: TrendingUp, 
    title: "Improve", 
    desc: "Data-driven iteration. We measure everything and scale what works.",
    color: "#FF9F40" 
  }
];

export default function Methodology() {
  return (
    <section className="py-40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center space-y-4 mb-24">
          <div className="section-label justify-center">Methodology</div>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter">The Engineering Cycle</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="relative group p-8 bg-surface/20 border border-outline rounded-2xl hover:bg-surface/40 transition-all duration-500 hover:-translate-y-2"
            >
              <div 
                className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: `${step.color}10`, border: `1px solid ${step.color}30` }}
              >
                 <step.icon className="relative z-10 transition-transform group-hover:scale-110" style={{ color: step.color }} size={28} />
                 <div className="absolute inset-x-0 bottom-0 h-1 transition-all duration-500 group-hover:h-full opacity-10" style={{ backgroundColor: step.color }}></div>
              </div>
              
              <div className="space-y-4">
                 <div className="font-mono text-[10px] text-on-surface-muted uppercase tracking-[0.3em]">Phase 0{i + 1}</div>
                 <h3 className="text-2xl font-bold">{step.title}</h3>
                 <p className="text-on-surface-variant font-light leading-relaxed text-sm">
                   {step.desc}
                 </p>
              </div>

              {/* Connecting Line (Mobile: None, Desktop: To next item) */}
              {i < 3 && (
                <div className="hidden lg:block absolute top-16 left-[80%] w-1/2 h-[1px] bg-gradient-to-r from-outline to-transparent -z-10"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-[600px] bg-primary/2 blur-[120px] -z-10 -translate-y-1/2 pointer-events-none"></div>
    </section>
  );
}
