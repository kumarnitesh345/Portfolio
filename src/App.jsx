import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#040d09] text-[#f0fdf4] flex flex-col font-sans selection:bg-[#00df81]/30 selection:text-[#a7f3d0] overflow-x-hidden w-full max-w-[100vw]">
      {/* Accessible Skip Link */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-5 py-2.5 bg-[#00df81] text-stone-950 font-bold text-xs font-mono rounded-full shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00df81]"
      >
        Skip to main content
      </a>

      {/* Fixed Cyber-Emerald Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
