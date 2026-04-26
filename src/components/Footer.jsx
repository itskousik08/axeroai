import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, ExternalLink } from 'lucide-react';
import AxeroLogo from './AxeroLogo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Ecosystem: [
      { name: 'Featured Projects', href: '/projects' },
      { name: 'Research Hub', href: '/research' },
      { name: 'Axero Labs', href: '/labs' },
      { name: 'DM Automator', href: '/projects/dm-automator' },
    ],
    Foundry: [
      { name: 'Intelligence News', href: '/news' },
      { name: 'Technical Docs', href: '#' },
      { name: 'System Status', href: '#' },
    ],
    Company: [
      { name: 'About', href: '#' },
      { name: 'Philosophy', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '/contact' },
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="pt-32 pb-12 border-t border-outline relative overflow-hidden px-[30px]">
      <div className="grid-bg opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-24"
        >
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-10">
            <a href="/" className="block group">
              <AxeroLogo size={52} className="!items-start" />
            </a>
            <p className="text-base text-on-surface-variant font-light leading-relaxed max-w-sm">
              Architecting cognitive infrastructure for the decentralized era. We build autonomous systems that reason, plan, and execute with precision.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Mail, href: "#" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.href} 
                  className="w-10 h-10 border border-outline rounded-xl flex items-center justify-center text-on-surface-variant hover:text-white hover:border-primary/50 hover:bg-primary/5 transition-all"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <motion.div variants={itemVariants} key={title}>
              <h4 className="font-mono text-[10px] text-on-surface-muted uppercase tracking-[0.3em] mb-10">{title}</h4>
              <ul className="space-y-6">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-on-surface-variant hover:text-white transition-colors font-light flex items-center gap-2 group">
                      {link.name}
                      {link.name.includes('↗') && <ExternalLink size={12} className="opacity-40 group-hover:opacity-100 transition-opacity" />}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="pt-12 border-t border-outline flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
             <p className="font-mono text-[11px] text-on-surface-muted">
                © {currentYear} AxeroAI Systems. All intellectual property secured.
             </p>
             <div className="flex gap-8">
                {['Privacy Protocol', 'Terms of Execution'].map(label => (
                   <a key={label} href="#" className="font-mono text-[10px] text-on-surface-muted hover:text-on-surface-variant transition-colors uppercase tracking-widest">
                   {label}
                   </a>
                ))}
             </div>
          </div>
          <div className="flex items-center gap-6">
             <span className="font-mono text-[9px] text-zinc-800 uppercase tracking-widest">Region: Global Cluster</span>
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
                <span className="font-mono text-[9px] text-zinc-800 uppercase tracking-widest">System Health: 100%</span>
             </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
