import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Code2, 
  FolderKanban, 
  Award,
  Sparkles
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Hero() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden"
    >
      {/* Background Ambience: Subtle Dark Forest Glow and Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#00df81]/15 via-[#064e3b]/20 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#00df81]/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        {/* Top Split Layout: Intro on Left, Circular Glowing Portrait on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-14">
          
          {/* LEFT COLUMN: Text, Headline & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill: "● Hi, I'm" */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00df81] animate-pulse"></span>
              <span className="text-sm font-medium text-stone-200">Hi, I'm</span>
            </div>

            {/* Main Name: Nitesh Kumar */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2 font-sans">
              Nitesh <span className="text-[#00df81]">Kumar</span>
            </h1>

            {/* Role Headline: Web Developer / Software Engineer */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-100 mb-4 font-sans">
              Software Engineer &amp; Full Stack Developer
            </h2>

            {/* Bio paragraph */}
            <p className="text-sm sm:text-base text-stone-300 leading-relaxed mb-8 max-w-xl">
              I build modern, scalable web applications, robust test automation frameworks, and intelligent machine learning solutions that solve real problems.
            </p>

            {/* CTA Buttons matching design */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Primary Green Pill Button */}
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#00df81] hover:bg-[#05c774] text-stone-950 font-bold text-sm transition-all shadow-lg shadow-[#00df81]/25 hover:shadow-[#00df81]/40 active:scale-95 cursor-pointer group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Outlined Pill Button */}
              <a
                href={resumeData.personal.resumePdf}
                download="Nitesh_Kumar_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#00df81]/40 hover:border-[#00df81] bg-[#081a14]/60 text-white font-semibold text-sm transition-all hover:bg-[#081a14] active:scale-95 cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#00df81]" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Circular Portrait with Glowing Rings & "Code Create Grow" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative flex items-center justify-center w-72 h-72 sm:w-88 sm:h-88">
              {/* Ambient Green Glowing Backdrop */}
              <div className="absolute inset-0 bg-[#00df81]/20 rounded-full blur-2xl pointer-events-none" />

              {/* Outer Dashed / Dotted Orbit Ring */}
              <div className="absolute -inset-4 sm:-inset-6 rounded-full border border-dashed border-[#00df81]/30 animate-spin-slow pointer-events-none" />

              {/* Decorative Matrix Dots */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-dot-matrix opacity-70 pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-dot-matrix opacity-70 pointer-events-none" />

              {/* Mid Glowing Ring */}
              <div className="absolute -inset-1.5 rounded-full border-2 border-[#00df81]/40 pointer-events-none" />

              {/* Circular Portrait Image Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-[#081a14] bg-[#081a14] shadow-2xl">
                <img
                  src={resumeData.personal.avatar}
                  alt="Nitesh Kumar portrait"
                  className="w-full h-full object-cover object-center filter saturate-[0.98] contrast-[1.03]"
                  loading="eager"
                />
                
                {/* Subtle Emerald Vignette */}
                <div className="absolute inset-0 rounded-full ring-2 ring-inset ring-[#00df81]/30 pointer-events-none" />
              </div>

              {/* Floating "Code • Create • Grow →" Handwritten Accent */}
              <div className="absolute -bottom-4 -right-2 sm:-right-6 bg-[#040d09]/90 border border-[#00df81]/40 rounded-full px-4 py-1.5 shadow-xl backdrop-blur-md">
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-[#00df81] flex items-center gap-1">
                  <span>Code • Create • Grow</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00df81]" />
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* BOTTOM METRICS STRIP: Exactly matching the 3-metric banner card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl bg-[#081a14]/85 border border-[#00df81]/20 p-5 sm:p-6 shadow-xl backdrop-blur-md"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#00df81]/15">
            {/* Stat 1 */}
            <div className="flex items-center gap-4 justify-start sm:justify-center pt-2 sm:pt-0">
              <div className="p-3 rounded-xl bg-[#00df81]/10 text-[#00df81] border border-[#00df81]/25">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#00df81] tracking-tight">
                  85%+
                </div>
                <div className="text-xs sm:text-sm text-stone-300 font-medium">
                  Regression Reduced (8+ Modules)
                </div>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4 justify-start sm:justify-center pt-4 sm:pt-0 sm:pl-6">
              <div className="p-3 rounded-xl bg-[#00df81]/10 text-[#00df81] border border-[#00df81]/25">
                <FolderKanban className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#00df81] tracking-tight">
                  10+
                </div>
                <div className="text-xs sm:text-sm text-stone-300 font-medium">
                  Projects &amp; Deployments Delivered
                </div>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4 justify-start sm:justify-center pt-4 sm:pt-0 sm:pl-6">
              <div className="p-3 rounded-xl bg-[#00df81]/10 text-[#00df81] border border-[#00df81]/25">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#00df81] tracking-tight">
                  8.59
                </div>
                <div className="text-xs sm:text-sm text-stone-300 font-medium">
                  B.Tech CGPA &amp; SIH Hackathon
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
