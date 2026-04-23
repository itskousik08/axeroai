import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const stats = [
  { value: 12, label: "Products Shipped", suffix: "" },
  { value: 3.2, label: "API Calls Monthly", suffix: "M+" },
  { value: 40, label: "Countries Reached", suffix: "+" },
  { value: 99.9, label: "Platform Uptime", suffix: "%" }
];

function StatItem({ stat }: { stat: typeof stats[0] }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(0, stat.value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = (Number.isInteger(stat.value) ? Math.floor(value) : value.toFixed(1)) + stat.suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, stat.value, stat.suffix]);

  return (
    <div className="text-center px-8 space-y-3 relative group">
      <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
      <span ref={nodeRef} className="block text-5xl md:text-7xl font-display font-extrabold tracking-tighter premium-gradient-text">
        0
      </span>
      <span className="block font-mono text-[11px] text-on-surface-muted uppercase tracking-[0.2em] group-hover:text-primary transition-colors">
        {stat.label}
      </span>
    </div>
  );
}

export default function StatsStrip() {
  return (
    <section className="py-24 border-y border-outline bg-surface/30 backdrop-blur-sm relative overflow-hidden">
      <div className="grid-bg opacity-30"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 lg:divide-x lg:divide-outline">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
