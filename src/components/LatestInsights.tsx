import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import PremiumCard from './PremiumCard';

interface Post {
  slug: string;
  data: {
    title: string;
    description: string;
    image: string;
    category: string;
    publishDate?: Date;
    date?: Date;
  };
}

interface LatestInsightsProps {
  posts: Post[];
}

export default function LatestInsights({ posts }: LatestInsightsProps) {
  return (
    <section id="blog" className="py-40 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="section-label">Intelligence Brief</div>
            <h2 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-none">From the Lab</h2>
          </motion.div>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="/blog" 
            className="group flex items-center gap-3 text-on-surface-variant hover:text-white transition-all text-sm font-medium"
          >
            View Full Publication
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
          </motion.a>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={i === 0 ? 'lg:col-span-2' : ''}
            >
              <a href={`/blog/${post.slug}`} className="block h-full group">
                <PremiumCard className="!p-0 h-full flex flex-col overflow-hidden">
                  <div className={`relative overflow-hidden border-b border-outline ${i === 0 ? 'aspect-[21/9]' : 'aspect-video'}`}>
                     <motion.img 
                       whileHover={{ scale: 1.05 }}
                       transition={{ duration: 0.8 }}
                       src={post.data.image} 
                       alt={post.data.title} 
                       className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                     />
                     <div className="absolute top-6 left-6 z-20">
                        <span className="font-mono text-[9px] text-primary uppercase tracking-widest bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-md backdrop-blur-md">
                           {post.data.category}
                        </span>
                     </div>
                  </div>
                  
                  <div className="p-10 flex flex-col justify-between flex-grow space-y-10">
                    <div className="space-y-6">
                      <div className="flex items-center gap-2 font-mono text-[10px] text-on-surface-muted uppercase tracking-widest">
                        <Clock size={12} />
                        {(post.data.publishDate || post.data.date)?.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        <span className="mx-2 opacity-20">/</span>
                        <span>8 min read</span>
                      </div>
                      <h3 className={`font-bold tracking-tight group-hover:text-primary transition-colors ${i === 0 ? 'text-4xl' : 'text-2xl'}`}>
                        {post.data.title}
                      </h3>
                      <p className="text-on-surface-variant font-light text-lg line-clamp-3 leading-relaxed">
                        {post.data.description}
                      </p>
                    </div>
                    
                    <div className="pt-8 border-t border-outline flex items-center justify-between text-[11px] font-mono text-on-surface-muted uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                      Review Protocol <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </PremiumCard>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
