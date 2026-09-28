import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, CheckCircle2, Layers, ArrowUpRight } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24 relative bg-[#040d09]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header: 03 —— Projects */}
        <div className="flex items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="text-[#00df81] font-mono font-bold text-lg">03 ——</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>

          <a
            href={resumeData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#00df81]/40 hover:border-[#00df81] bg-[#081a14] text-xs font-semibold text-[#00df81] hover:text-white transition-all cursor-pointer group"
          >
            <span>Explore All on GitHub</span>
            <span className="text-xs group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        {/* 3-Column Projects Grid: MRI Insights, Hospital Management System, GURU99 Bank Automation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="rounded-2xl bg-[#081a14]/85 border border-[#00df81]/25 hover:border-[#00df81] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#00df81]/20 flex flex-col justify-between group relative"
            >
              <div>
                {/* Mockup Preview Header (Clickable to Project GitHub Repo) */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-[16/10] bg-[#040d09] border-b border-[#00df81]/20 p-4 flex flex-col justify-between overflow-hidden rounded-t-2xl cursor-pointer block group/header"
                  title={`View ${project.title} on GitHub`}
                >
                  {/* Glowing background accent */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#00df81]/15 rounded-full blur-2xl group-hover/header:bg-[#00df81]/30 transition-all" />

                  {/* Window Controls Bar */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00df81]/70"></span>
                    </div>
                    <span className="text-[11px] font-mono text-[#00df81] bg-[#081a14] px-2.5 py-0.5 rounded-full border border-[#00df81]/30">
                      {project.category}
                    </span>
                  </div>

                  {/* Center Card Visual Graphic */}
                  <div className="my-auto z-10 flex flex-col items-center justify-center text-center px-2">
                    <div className="w-12 h-12 rounded-xl bg-[#081a14] border border-[#00df81]/30 flex items-center justify-center text-[#00df81] mb-2 group-hover/header:scale-110 transition-transform shadow-lg shadow-[#00df81]/15">
                      <Layers className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-stone-300 group-hover/header:text-[#00df81] transition-colors">
                      {project.architecture || "Production Architecture"}
                    </span>
                  </div>

                  {/* Top Arrow Button linking directly to project's GitHub */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-stone-400 z-10 pt-1 border-t border-[#00df81]/10">
                    <span className="text-stone-300 group-hover/header:text-white">View Source Code</span>
                    <span className="inline-flex items-center gap-1 text-[#00df81] font-semibold">
                      <span>GitHub</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/header:translate-x-1 group-hover/header:-translate-y-1 transition-transform" />
                    </span>
                  </div>
                </a>

                {/* Content Body */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#00df81] transition-colors mb-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-4 decoration-[#00df81]"
                    >
                      {project.title}
                    </a>
                  </h3>

                  <p className="text-xs text-stone-300 leading-relaxed mb-4 line-clamp-2">
                    {project.tagline}
                  </p>

                  {/* Metric Badges */}
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-[#040d09] border border-[#00df81]/20 font-mono text-center">
                        <div className="text-[10px] text-stone-400">{m.label}</div>
                        <div className="text-xs font-bold text-[#00df81]">{m.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Details Bullet List */}
                  <ul className="space-y-1.5 text-xs text-stone-400 mb-5">
                    {project.details.slice(0, 2).map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00df81] shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Tech Stack Chips & Action Button correctly redirecting to GitHub */}
              <div className="p-5 sm:p-6 pt-0 border-t border-[#00df81]/15 mt-auto flex items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#040d09] text-stone-300 border border-[#00df81]/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <div className="relative group/tech inline-flex">
                      <button
                        type="button"
                        aria-label={`+${project.technologies.length - 3} more technologies: ${project.technologies.slice(3).join(', ')}`}
                        title={`More technologies: ${project.technologies.slice(3).join(', ')}`}
                        className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold text-[#00df81] bg-[#00df81]/15 hover:bg-[#00df81] hover:text-stone-950 border border-[#00df81]/35 hover:border-[#00df81] transition-all cursor-pointer flex items-center select-none focus:outline-none focus:ring-1 focus:ring-[#00df81]"
                      >
                        +{project.technologies.length - 3}
                      </button>

                      {/* Floating Cyber-Emerald Tooltip on Hover / Focus */}
                      <div
                        role="tooltip"
                        className="absolute bottom-full mb-2 left-0 sm:left-1/2 sm:-translate-x-1/2 opacity-0 pointer-events-none group-hover/tech:opacity-100 group-hover/tech:pointer-events-auto group-focus-within/tech:opacity-100 transition-all duration-200 z-50 flex flex-col items-start sm:items-center"
                      >
                        <div className="bg-[#040d09]/95 border border-[#00df81]/60 backdrop-blur-md rounded-xl p-3 shadow-2xl shadow-black/90 min-w-[170px] max-w-[240px]">
                          <div className="text-[10px] font-mono font-bold text-[#00df81] uppercase tracking-wider mb-2 border-b border-[#00df81]/25 pb-1">
                            +{project.technologies.length - 3} More Technologies
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.slice(3).map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#081a14] text-stone-200 border border-[#00df81]/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        {/* Downward pointing caret */}
                        <div className="w-2.5 h-2.5 bg-[#040d09] border-r border-b border-[#00df81]/60 transform rotate-45 -mt-1.5 ml-3 sm:ml-0" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Arrow / GitHub Button linking directly to project's repository */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-stone-300 hover:text-stone-950 bg-[#040d09] hover:bg-[#00df81] transition-all border border-[#00df81]/30 shrink-0 font-medium"
                  aria-label={`Open ${project.title} GitHub repository in new tab`}
                  title={`Redirect to ${project.title} GitHub Repository`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repo</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
