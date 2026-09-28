import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Download } from 'lucide-react';
import { resumeData } from '../data/resumeData';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLetsTalk = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    window.dispatchEvent(new CustomEvent('open-contact-form'));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#040d09]/92 backdrop-blur-md border-b border-[#00df81]/20 shadow-lg shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Prominent Name: Nitesh Kumar. */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-xl sm:text-2xl font-extrabold tracking-tight text-white hover:opacity-95 transition-opacity flex items-center"
          aria-label="Nitesh Kumar Portfolio"
        >
          <span>Nitesh&nbsp;Kumar</span>
          <span className="text-[#00df81]">.</span>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#00df81] font-semibold'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button: "Let's Talk →" Pill Button & Resume Download */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={resumeData.personal.resumePdf}
            download="Nitesh_Kumar_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#00df81]/40 hover:border-[#00df81] text-xs font-semibold text-stone-200 hover:text-white transition-all bg-[#081a14]/60"
            title="Download Nitesh's Resume PDF"
          >
            <Download className="w-3.5 h-3.5 text-[#00df81]" />
            <span>CV</span>
          </a>

          <button
            type="button"
            onClick={handleLetsTalk}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#00df81] hover:bg-[#05c774] text-stone-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-[#00df81]/25 hover:shadow-[#00df81]/40 active:scale-95 cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile menu toggle (Unnecessary "Talk" button removed per specification) */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-stone-300 hover:text-white hover:bg-[#081a14] border border-[#00df81]/30"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#040d09]/98 backdrop-blur-xl border-b border-[#00df81]/25 px-5 pt-3 pb-6 transition-all duration-200">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2.5 rounded-xl text-sm flex items-center justify-between ${
                    isActive
                      ? 'text-[#00df81] bg-[#081a14] border border-[#00df81]/30 font-semibold'
                      : 'text-stone-300 hover:text-white hover:bg-[#081a14]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#00df81]"></span>}
                </a>
              );
            })}
          </nav>

          <div className="pt-4 mt-3 border-t border-[#00df81]/20 flex items-center justify-between gap-3">
            <a
              href={resumeData.personal.resumePdf}
              download="Nitesh_Kumar_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#00df81]/40 text-xs font-semibold text-stone-200"
            >
              <Download className="w-3.5 h-3.5 text-[#00df81]" />
              <span>Resume PDF</span>
            </a>

            <button
              type="button"
              onClick={handleLetsTalk}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#00df81] text-stone-950 font-bold text-xs"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
