import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, CheckCircle2, Award, ShieldCheck } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24 relative bg-[#040d09]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header: 04 —— Experience & Professional Training */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[#00df81] font-mono font-bold text-lg">04 ——</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience &amp; Corporate Training
          </h2>
        </div>

        {/* Experience Timeline Cards including Wipro SDET Training */}
        <div className="space-y-6">
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="rounded-2xl bg-[#081a14]/85 border border-[#00df81]/25 p-6 sm:p-7 hover:border-[#00df81] transition-all duration-300 hover:shadow-xl hover:shadow-[#00df81]/15 group"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-[#00df81]/15 text-[#00df81] border border-[#00df81]/30">
                      {exp.type.includes('Training') ? (
                        <ShieldCheck className="w-3.5 h-3.5" />
                      ) : (
                        <Briefcase className="w-3.5 h-3.5" />
                      )}
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono text-stone-400">
                      {exp.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#00df81] transition-colors">
                    {exp.role} — <span className="text-stone-300 font-normal">{exp.title}</span>
                  </h3>

                  <div className="flex items-center gap-1.5 text-sm text-stone-300 mt-0.5">
                    <Building2 className="w-4 h-4 text-stone-400" />
                    <span className="font-semibold text-white">{exp.organization}</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-stone-300 bg-[#040d09] px-3.5 py-1.5 rounded-full border border-[#00df81]/30 self-start">
                  <Calendar className="w-3.5 h-3.5 text-[#00df81]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullet Descriptions */}
              <ul className="space-y-2 text-xs sm:text-sm text-stone-300 mb-6">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#00df81] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Metrics & Technologies */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#00df81]/15">
                <div className="flex flex-wrap gap-2">
                  {exp.metrics.map((m, idx) => (
                    <div key={idx} className="px-3 py-1 rounded-lg bg-[#040d09] border border-[#00df81]/20 text-xs font-mono">
                      <span className="text-stone-400">{m.label}: </span>
                      <span className="text-[#00df81] font-bold">{m.value}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#040d09] text-stone-300 border border-[#00df81]/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
