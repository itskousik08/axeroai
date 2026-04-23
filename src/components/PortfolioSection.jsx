import React from 'react';
import { Brain, Cpu, Zap, Search, Monitor, Globe, FlaskConical, MoveRight, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

const PortfolioSection = () => {
  const products = [
    {
      name: 'Lumina AI',
      desc: 'Advanced neural visualization and decision intelligence for complex enterprise data. Real-time pattern recognition across multi-dimensional datasets.',
      icon: <Brain className="text-black" size={24} />,
      status: 'Live',
      tech: ['Python', 'React'],
      featured: true
    },
    {
      name: 'Nexus Core',
      desc: 'Decentralized backbone for multi-agent collaboration systems. Coordinate dozens of AI agents with persistent memory.',
      icon: <Zap className="text-black" size={20} />,
      status: 'Beta',
      tech: ['Node.js'],
      featured: false
    },
    {
      name: 'AxeroLeads',
      desc: 'AI-powered lead generation and scraping platform with multi-source support, deduplication, and CRM export.',
      icon: <Search className="text-black" size={20} />,
      status: 'Live',
      tech: ['Apify'],
      featured: false
    },
    {
      name: 'MotionStudio',
      desc: 'Browser-based professional video editor with JSX-to-video conversion. MediaRecorder API support.',
      icon: <Monitor className="text-black" size={20} />,
      status: 'Beta',
      tech: ['React'],
      featured: false
    },
    {
      name: 'Aether',
      desc: 'Next-gen language interface for high-stakes enterprise decision making. Context-aware and audit-ready.',
      icon: <Globe className="text-black" size={20} />,
      status: 'Building',
      tech: ['LLM'],
      featured: false
    }
  ];

  return (
    <section id="products" className="py-32">
      <div className="container mx-auto px-6">
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-4 h-[1px] bg-black"></div>
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-black">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-black">Featured Products</h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors group">
            View All Projects
            <MoveRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((p, i) => (
            <div 
              key={p.name}
              className={`group relative overflow-hidden bg-white border border-black/5 rounded-2xl p-8 flex flex-col transition-all duration-500 hover:border-black/20 hover:shadow-2xl ${p.featured ? 'md:col-span-2 md:flex-row md:items-center md:gap-12 md:p-12' : ''}`}
            >
              <div className={p.featured ? 'flex-1' : ''}>
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 border border-black/5 flex items-center justify-center">
                    {p.icon}
                  </div>
                  <span className={`font-mono text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${
                    p.status === 'Live' ? 'text-green-600 border-green-600/20 bg-green-50/50' : 
                    p.status === 'Beta' ? 'text-orange-500 border-orange-500/20 bg-orange-50/50' : 
                    'text-gray-400 border-gray-100 bg-transparent'
                  }`}>
                    {p.status}
                  </span>
                </div>
                <h3 className={`font-display font-bold text-black mb-3 tracking-tight ${p.featured ? 'text-3xl' : 'text-xl'}`}>{p.name}</h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 flex-grow">{p.desc}</p>
                <div className="pt-6 border-t border-black/5 flex items-center justify-between">
                  <a href="#" className="inline-flex items-center gap-2 font-mono text-[11px] text-black font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                    View Product <ChevronRight size={12} />
                  </a>
                  <div className="flex gap-2">
                    {p.tech.map(t => (
                      <span key={t} className="font-mono text-[9px] text-gray-400 bg-gray-50 px-2 py-1 border border-black/5 rounded uppercase">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              {p.featured && (
                <div className="hidden md:flex flex-1 aspect-square bg-gray-50 rounded-2xl items-center justify-center relative overflow-hidden border border-black/5">
                  <div className="text-8xl scale-150 grayscale opacity-10 group-hover:scale-100 group-hover:opacity-100 transition-all duration-1000">
                    <Brain size={120} strokeWidth={1} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
