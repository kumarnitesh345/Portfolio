import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, CheckCircle2, Building2 } from 'lucide-react';
import SkillChip from './SkillChip';
import MetricBadge from './MetricBadge';

export default function ExperienceCard({ experience, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
      className="group relative rounded-xl bg-[#180e1d]/75 backdrop-blur-md border border-[#873b70]/70 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#d98ab5] hover:shadow-xl hover:shadow-[#d98ab5]/15"
    >
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-[#873b70]/20 text-[#ffadbc] border border-[#975d8e]/60">
              <Briefcase className="w-3 h-3 text-[#d98ab5]" />
              {experience.type}
            </span>
            <span className="text-xs font-mono text-stone-400">
              {experience.duration}
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#ffadbc] transition-colors">
            {experience.role}
          </h3>
          <div className="flex items-center gap-1.5 text-sm text-stone-300 font-medium mt-0.5">
            <Building2 className="w-3.5 h-3.5 text-stone-400" />
            <span>{experience.organization}</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-mono text-stone-300 bg-[#0d0710] px-3 py-1.5 rounded-lg border border-[#873b70]/60 self-start">
          <Calendar className="w-3.5 h-3.5 text-[#d98ab5]" />
          <span>{experience.period}</span>
        </div>
      </div>

      {/* Project Title Callout */}
      <div className="mb-4 inline-block px-3 py-1 rounded bg-[#0d0710] border border-[#873b70]/60 text-xs font-mono text-stone-300">
        <span className="text-[#d98ab5] font-semibold">Focus Area:</span> {experience.title}
      </div>

      {/* Bullet descriptions */}
      <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300 mb-6">
        {experience.description.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
            <CheckCircle2 className="w-4 h-4 text-[#d98ab5] shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Metrics Row */}
      {experience.metrics && (
        <div className="flex flex-wrap gap-2 mb-5 pt-3 border-t border-[#873b70]/50">
          {experience.metrics.map((metric, idx) => (
            <MetricBadge key={idx} label={metric.label} value={metric.value} variant="default" />
          ))}
        </div>
      )}

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {experience.technologies.map((tech) => (
          <SkillChip key={tech} name={tech} size="sm" />
        ))}
      </div>
    </motion.div>
  );
}
