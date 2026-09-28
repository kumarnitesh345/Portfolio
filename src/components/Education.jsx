import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Trophy, 
  Users, 
  CheckCircle2, 
  Medal,
  Calendar
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-24 relative bg-[#040d09]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header: 05 —— Education & Honors */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[#00df81] font-mono font-bold text-lg">05 ——</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; Honors
          </h2>
        </div>

        {/* Education 3-Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="rounded-2xl bg-[#081a14]/85 border border-[#00df81]/25 p-6 flex flex-col justify-between hover:border-[#00df81] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#00df81]/15 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#00df81]/15 text-[#00df81] border border-[#00df81]/30">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-stone-300 bg-[#040d09] px-3 py-1 rounded-full border border-[#00df81]/25">
                    {edu.period}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base group-hover:text-[#00df81] transition-colors mb-1.5 leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-xs font-medium text-stone-300 mb-3">
                  {edu.institution}
                </p>
                <p className="text-xs text-stone-400 leading-relaxed mb-4">
                  {edu.details}
                </p>
              </div>

              <div className="pt-4 border-t border-[#00df81]/15 flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase text-stone-400">{edu.scoreType}</span>
                <span className="text-sm font-extrabold text-[#00df81] font-mono">{edu.score}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Two-Column Split: Leadership (Left) & Key Achievements (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Position of Responsibility: NEEDS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00df81]"></span>
              <h3 className="text-lg font-bold text-white">
                Position of Responsibility
              </h3>
            </div>

            {resumeData.leadership.map((lead, idx) => (
              <div
                key={idx}
                className="h-full rounded-2xl bg-[#081a14]/85 border border-[#00df81]/25 p-6 sm:p-7 flex flex-col justify-between hover:border-[#00df81] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-[#00df81]/15 text-[#00df81] border border-[#00df81]/30">
                        <Users className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#00df81]">
                        {lead.organization}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-stone-400 bg-[#040d09] px-2.5 py-1 rounded-full border border-[#00df81]/20">
                      {lead.period}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white mb-2">
                    {lead.role}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-4">
                    {lead.description}
                  </p>

                  <ul className="space-y-2 text-xs text-stone-400 mb-4">
                    {lead.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00df81] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-[#00df81]/15 flex items-center justify-between text-xs font-mono text-stone-400">
                  <span>Community Outreach &amp; Mentorship</span>
                  <span className="text-[#00df81] font-semibold">2022 – 2025</span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00df81]"></span>
              <h3 className="text-lg font-bold text-white">
                Key Honors &amp; Achievements
              </h3>
            </div>

            <div className="space-y-4 flex-1 flex flex-col justify-between">
              {resumeData.achievements.map((ach) => (
                <div
                  key={ach.id}
                  className="rounded-2xl bg-[#081a14]/85 border border-[#00df81]/25 p-5 sm:p-6 hover:border-[#00df81] transition-all group overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 sm:gap-3 mb-2.5">
                    <div className="flex items-start gap-3 min-w-0">
                      <div className="p-2.5 rounded-xl bg-[#00df81]/15 text-[#00df81] border border-[#00df81]/30 shrink-0 mt-0.5">
                        {ach.id.includes('hackathon') ? (
                          <Trophy className="w-5 h-5" />
                        ) : (
                          <Medal className="w-5 h-5" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-white text-base group-hover:text-[#00df81] transition-colors leading-snug break-words">
                          {ach.title}
                        </h4>
                        <div className="text-xs font-mono text-stone-400 mt-0.5">
                          {ach.organization}
                        </div>
                      </div>
                    </div>

                    <div className="self-start sm:self-auto sm:shrink-0 pl-11 sm:pl-0">
                      <span className="inline-flex items-center text-[11px] font-mono text-stone-950 font-bold bg-[#00df81] px-2.5 py-1 rounded-full whitespace-nowrap shadow-sm">
                        {ach.badge}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mt-2 pl-0 sm:pl-12">
                    {ach.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
