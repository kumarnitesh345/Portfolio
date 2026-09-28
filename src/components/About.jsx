import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Code2, GraduationCap, CheckCircle2, ShieldCheck, Rocket } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function About() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(new CustomEvent('open-contact-form'));
    }
  };

  const scrollToExperience = (e) => {
    e.preventDefault();
    const el = document.getElementById('experience');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header: 01 —— About Me */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[#00df81] font-mono font-bold text-lg">01 ——</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* Split Grid: Description on Left, Visual Tech Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Creative, Professional & Recruiter-Friendly Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Catchy headline badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081a14] border border-[#00df81]/30 text-xs font-mono text-[#00df81] mb-4">
              <Rocket className="w-3.5 h-3.5" />
              <span>Engineering Scalable &amp; Reliable Software</span>
            </div>

            {/* Recruiter-friendly bio */}
            <p className="text-base sm:text-lg text-stone-200 leading-relaxed mb-4 font-normal">
              {resumeData.personal.aboutLong}
            </p>

            <p className="text-sm text-stone-300 leading-relaxed mb-8">
              With a strong engineering discipline from Haldia Institute of Technology and hands-on SDET corporate training with Wipro, I bridge the gap between fast-paced feature development and rock-solid quality assurance. I am eager to contribute to innovative software engineering teams where performance, scalability, and code excellence matter.
            </p>

            {/* Value Highlights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full">
              <div className="p-3.5 rounded-xl bg-[#081a14]/80 border border-[#00df81]/20 flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-[#00df81] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase font-mono text-stone-400">Education &amp; Merit</div>
                  <div className="text-sm font-semibold text-white">B.Tech CSE (8.59 CGPA)</div>
                  <div className="text-xs text-stone-400">Haldia Institute of Technology</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#081a14]/80 border border-[#00df81]/20 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#00df81] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs uppercase font-mono text-stone-400">Industry Training</div>
                  <div className="text-sm font-semibold text-white">Wipro SDET Program</div>
                  <div className="text-xs text-stone-400">Automation, BDD &amp; CI/CD Pipelines</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                onClick={scrollToExperience}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#00df81]/50 hover:border-[#00df81] bg-[#081a14] hover:bg-[#00df81] text-white hover:text-stone-950 font-bold text-sm transition-all shadow-md shadow-[#00df81]/15 active:scale-95 group"
              >
                <span>View Experience &amp; Training</span>
                <ArrowRight className="w-4 h-4 text-[#00df81] group-hover:text-stone-950 group-hover:translate-x-1 transition-all" />
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-stone-800 hover:border-[#00df81]/50 text-xs font-mono text-stone-300 hover:text-white transition-colors"
              >
                <span>Get in Touch →</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Tech Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl bg-[#081a14] border border-[#00df81]/30 p-6 shadow-2xl overflow-hidden group hover:border-[#00df81]/60 transition-all">
              {/* Top ambient glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#00df81]/15 blur-3xl pointer-events-none" />

              {/* Mac-style Window Bar */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#00df81]/15">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-[#00df81]/80"></span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#00df81]">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>nitesh_profile.ts</span>
                </div>
              </div>

              {/* Graphic Code Snippet */}
              <div className="font-mono text-xs text-stone-300 space-y-2 leading-relaxed">
                <p className="text-stone-400"><span className="text-[#00df81]">const</span> engineer = &#123;</p>
                <p className="pl-4 text-stone-300">name: <span className="text-[#00df81]">'Nitesh Kumar'</span>,</p>
                <p className="pl-4 text-stone-300">degree: <span className="text-[#00df81]">'B.Tech CSE (2021-2025)'</span>,</p>
                <p className="pl-4 text-stone-300">cgpa: <span className="text-amber-400">8.59</span>,</p>
                <p className="pl-4 text-stone-300">training: <span className="text-[#00df81]">'Wipro SDET Certified'</span>,</p>
                <p className="pl-4 text-stone-300">coreCompetencies: [</p>
                <p className="pl-8 text-[#00df81]">'Full-Stack Development',</p>
                <p className="pl-8 text-[#00df81]">'Automated Testing (Selenium, POM)',</p>
                <p className="pl-8 text-[#00df81]">'Cucumber BDD, Maven, TestNG, JUnit',</p>
                <p className="pl-8 text-[#00df81]">'CI/CD (Jenkins, Docker)'</p>
                <p className="pl-4 text-stone-300">],</p>
                <p className="pl-4 text-stone-300">readyToContribute: <span className="text-emerald-400">true</span></p>
                <p className="text-stone-400">&#125;;</p>
              </div>

              {/* Bottom Badge */}
              <div className="mt-5 pt-4 border-t border-[#00df81]/15 flex items-center justify-between text-xs font-medium">
                <span className="text-stone-400">Creative &amp; Scalable Engineering</span>
                <span className="text-[#00df81] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Skills
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
