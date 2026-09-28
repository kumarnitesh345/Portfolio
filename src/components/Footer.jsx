import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#00df81]/15 bg-[#020906] py-12 relative z-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Copyright */}
          <div className="text-center md:text-left">
            <div className="text-xl font-extrabold tracking-tight text-white flex items-center justify-center md:justify-start gap-1 mb-1">
              <span>Nitesh Kumar</span>
              <span className="text-[#00df81]">.</span>
            </div>
            <p className="text-xs text-stone-400 font-mono">
              &copy; 2026 Nitesh Kumar. All rights reserved.
            </p>
            <p className="text-xs text-stone-400 mt-0.5">
              Built with ❤️ by Nitesh
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={resumeData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-full bg-[#081a14] border border-[#00df81]/25 hover:border-[#00df81] hover:bg-[#00df81] text-stone-300 hover:text-stone-950 flex items-center justify-center transition-all shadow-sm"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={resumeData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-full bg-[#081a14] border border-[#00df81]/25 hover:border-[#00df81] hover:bg-[#00df81] text-stone-300 hover:text-stone-950 flex items-center justify-center transition-all shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${resumeData.personal.email}`}
                aria-label="Send Email"
                className="w-10 h-10 rounded-full bg-[#081a14] border border-[#00df81]/25 hover:border-[#00df81] hover:bg-[#00df81] text-stone-300 hover:text-stone-950 flex items-center justify-center transition-all shadow-sm"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="h-4 w-px bg-[#00df81]/20" />

            <button
              type="button"
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-[#081a14] border border-[#00df81]/30 hover:border-[#00df81] text-stone-300 hover:text-[#00df81] flex items-center justify-center transition-all cursor-pointer shadow-sm"
              aria-label="Scroll to top of page"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}
