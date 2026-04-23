import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface Lab {
  id: string;
  data: {
    title: string;
    description: string;
    status: string;
  };
}

interface LabsWorkspaceProps {
  labs: Lab[];
}

export default function LabsWorkspace({ labs }: LabsWorkspaceProps) {
  return (
    <div className="space-y-4">
      {labs.map((lab, i) => (
        <motion.div
          key={lab.id}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
        >
          <a href="/labs" className="block p-8 border border-outline bg-background/30 rounded-2xl flex items-center justify-between gap-8 group hover:bg-surface-accent transition-all duration-500 cursor-pointer overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all transform-gpu origin-top"></div>
            <div className="space-y-2 relative z-10">
              <h4 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">{lab.data.title}</h4>
              <p className="text-sm text-on-surface-variant font-light group-hover:text-on-background transition-colors">{lab.data.description}</p>
            </div>
            <div className="flex flex-col items-end gap-3 shrink-0 relative z-10">
              <span className={`font-mono text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-md border ${
                lab.data.status === 'Live' ? 'text-[#00C896] border-[#00C896]/20 bg-[#00C896]/5' : 
                lab.data.status === 'Beta' || lab.data.status === 'Prototyping' ? 'text-primary border-primary/20 bg-primary/5' : 
                'text-on-surface-muted border-outline bg-transparent'
              }`}>
                {lab.data.status}
              </span>
              <ArrowUpRight size={18} className="text-on-surface-muted group-hover:text-white group-hover:rotate-45 transition-all" />
            </div>
          </a>
        </motion.div>
      ))}
    </div>
  );
}
