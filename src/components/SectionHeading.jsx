import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  number,
  title,
  subtitle,
  centered = false,
  className = ""
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'} ${className}`}
    >
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#180e1d] border border-[#873b70] text-xs font-mono text-[#ffadbc] mb-3.5 backdrop-blur-sm ${centered ? 'mx-auto' : ''}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-[#d98ab5] animate-pulse"></span>
        {number && <span className="text-[#d98ab5] font-bold">{number}</span>}
        <span className="tracking-wide uppercase font-semibold">{subtitle || title}</span>
      </div>
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-sans">
        {title}
      </h2>
    </motion.div>
  );
}
