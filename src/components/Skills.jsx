import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Cpu, 
  Database, 
  GitBranch, 
  BookOpen, 
  CheckCircle2,
  Terminal,
  ExternalLink,
  ChevronDown,
  ShieldCheck,
  CheckCheck
} from 'lucide-react';

// Official, high-precision vector icons from react-icons
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiReact,
  SiHtml5,
  SiSelenium,
  SiCucumber,
  SiJunit5,
  SiApachemaven,
  SiGit,
  SiDocker,
  SiJenkins,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTensorflow,
  SiPandas,
  SiNumpy
} from 'react-icons/si';
import {
  FaJava,
  FaCss3Alt,
  FaVialCircleCheck
} from 'react-icons/fa6';
import {
  TbBrandVscode,
  TbSql,
  TbTestPipe2
} from 'react-icons/tb';

import { resumeData } from '../data/resumeData';

// Sharp, authentic vector logos matching each skill exactly
const techLogos = {
  Java: <FaJava className="w-8 h-8 text-[#f89820]" />,
  "C++": <SiCplusplus className="w-8 h-8 text-[#00599c]" />,
  Python: <SiPython className="w-8 h-8 text-[#3776ab]" />,
  JavaScript: <SiJavascript className="w-8 h-8 text-[#f7df1e]" />,
  React: <SiReact className="w-8 h-8 text-[#61dafb]" />,
  HTML5: <SiHtml5 className="w-8 h-8 text-[#e34f26]" />,
  CSS3: <FaCss3Alt className="w-8 h-8 text-[#1572b6]" />,
  SQL: <TbSql className="w-8 h-8 text-[#00758f]" />,
  Selenium: <SiSelenium className="w-8 h-8 text-[#43B02A]" />,
  Testing: <FaVialCircleCheck className="w-8 h-8 text-[#00df81]" />,
  Cucumber: <SiCucumber className="w-8 h-8 text-[#23D96C]" />,
  TestNG: <TbTestPipe2 className="w-8 h-8 text-[#cb2431]" />,
  JUnit: <SiJunit5 className="w-8 h-8 text-[#25a162]" />,
  Maven: <SiApachemaven className="w-8 h-8 text-[#C71A36]" />,
  Git: <SiGit className="w-8 h-8 text-[#f05032]" />,
  Docker: <SiDocker className="w-8 h-8 text-[#2496ed]" />,
  Jenkins: <SiJenkins className="w-8 h-8 text-[#d24939]" />,
  "VS Code": <TbBrandVscode className="w-8 h-8 text-[#007acc]" />,
  "Node.js": <SiNodedotjs className="w-8 h-8 text-[#339933]" />,
  "Express.js": <SiExpress className="w-8 h-8 text-white" />,
  MongoDB: <SiMongodb className="w-8 h-8 text-[#47A248]" />,
  TensorFlow: <SiTensorflow className="w-8 h-8 text-[#ff6f00]" />,
  Pandas: <SiPandas className="w-8 h-8 text-[#E70488]" />,
  NumPy: <SiNumpy className="w-8 h-8 text-[#4D77CF]" />
};

export default function Skills() {
  const [showAllCategories, setShowAllCategories] = useState(false);

  return (
    <section id="skills" className="py-20 md:py-24 relative bg-[#040d09]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header: 02 —— Skills with "View All →" toggle */}
        <div className="flex items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="text-[#00df81] font-mono font-bold text-lg">02 ——</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills &amp; Technologies
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setShowAllCategories(!showAllCategories)}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-[#00df81]/40 hover:border-[#00df81] bg-[#081a14] text-xs font-semibold text-[#00df81] hover:text-white transition-all cursor-pointer shadow-sm active:scale-95"
            aria-pressed={showAllCategories}
            title={showAllCategories ? "Switch to compact icon grid" : "Switch to categorized view"}
          >
            <span>{showAllCategories ? "Show Compact Grid" : "View Categorized"}</span>
            <span className="text-xs">→</span>
          </button>
        </div>

        <AnimatePresence mode="wait">
          {!showAllCategories ? (
            /* 1. ICON CARDS GRID (Visible by default) */
            <motion.div
              key="icons-grid"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5"
            >
              {resumeData.skillsList.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  className="rounded-2xl bg-[#081a14]/85 border border-[#00df81]/20 hover:border-[#00df81] p-5 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#00df81]/15 group cursor-default"
                >
                  {/* Tech Icon / Logo */}
                  <div className="w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-110">
                    {techLogos[skill.name] || (
                      <div className="w-8 h-8 rounded bg-[#00df81]/20 flex items-center justify-center font-mono font-bold text-[#00df81]">
                        {skill.name.substring(0, 2)}
                      </div>
                    )}
                  </div>

                  {/* Tech Label */}
                  <div className="text-xs sm:text-sm font-semibold text-stone-200 group-hover:text-white transition-colors text-center">
                    {skill.name}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* 2. CATEGORIZED VIEW ONLY (Icon cards with image are disabled/hidden) */
            <motion.div
              key="categorized-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28 }}
              className="space-y-6"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#00df81]/20">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00df81]"></span>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Detailed Engineering Specializations &amp; Frameworks
                  </h3>
                </div>
                <span className="text-xs font-mono text-stone-400">
                  {Object.keys(resumeData.skillsCategorized).length} Categories
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {Object.entries(resumeData.skillsCategorized).map(([key, items], idx) => {
                  const titleMap = {
                    programming: "Programming Languages",
                    testingAndQA: "Testing & QA Automation",
                    frameworksAndTools: "Frameworks & Developer Tools",
                    devopsAndCI: "DevOps & CI/CD Pipelines",
                    databases: "Databases & Storage",
                    machineLearning: "Machine Learning & AI",
                    coursework: "Core CS Fundamentals"
                  };
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: idx * 0.04 }}
                      className="p-5 rounded-2xl bg-[#081a14]/85 border border-[#00df81]/25 hover:border-[#00df81] transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00df81]/15 flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-xs uppercase font-mono text-[#00df81] font-bold mb-3 tracking-wider flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00df81]" />
                          <span>{titleMap[key] || key.replace(/([A-Z])/g, ' $1')}</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {items.map((item) => (
                            <span
                              key={item}
                              className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#040d09] border border-[#00df81]/20 text-stone-200 hover:border-[#00df81]/50 transition-colors"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-[#00df81]/10 flex items-center justify-between text-[11px] font-mono text-stone-400">
                        <span>{items.length} Competencies</span>
                        <span className="text-[#00df81]">● Production Ready</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
