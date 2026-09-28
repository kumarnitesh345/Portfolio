import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Layers, CheckCircle2 } from 'lucide-react';
import MetricBadge from './MetricBadge';
import SkillChip from './SkillChip';

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      className="group relative flex flex-col justify-between rounded-xl bg-[#180e1d]/75 backdrop-blur-md border border-[#873b70]/70 p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#d98ab5] hover:shadow-xl hover:shadow-[#d98ab5]/15"
    >
      <div>
        {/* Top bar: Category and Links */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#ffadbc] bg-[#873b70]/20 px-2.5 py-1 rounded-md border border-[#975d8e]/60">
            <Layers className="w-3 h-3 text-[#d98ab5]" />
            {project.category}
          </span>
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-stone-400 hover:text-[#ffadbc] rounded-lg hover:bg-[#0d0710] transition-colors"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-stone-400 hover:text-[#ffadbc] rounded-lg hover:bg-[#0d0710] transition-colors"
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold text-white group-hover:text-[#ffadbc] transition-colors mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-stone-300 leading-relaxed mb-5">
          {project.tagline}
        </p>

        {/* Architecture snippet if available */}
        {project.architecture && (
          <div className="mb-5 px-3 py-2 rounded-md bg-[#0d0710] border border-[#873b70]/60 text-xs font-mono text-stone-300">
            <span className="text-[#d98ab5] font-semibold">Arch:</span> {project.architecture}
          </div>
        )}

        {/* Key Achievements / Details */}
        <div className="space-y-2 mb-6">
          <p className="text-xs uppercase font-mono text-stone-400 font-semibold tracking-wider">
            Key Engineering Highlights:
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-stone-300">
            {project.details.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-[#d98ab5] shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        {/* Metric Badges */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 mb-5 pt-3 border-t border-[#873b70]/50">
            {project.metrics.map((m, idx) => (
              <MetricBadge key={idx} label={m.label} value={m.value} variant="default" />
            ))}
          </div>
        )}

        {/* Tech Stack Chips */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.technologies.map((tech) => (
            <SkillChip key={tech} name={tech} size="sm" />
          ))}
        </div>
      </div>
    </motion.article>
  );
}
