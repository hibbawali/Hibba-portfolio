'use client';

import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Sparkles, Download, Code2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-brand-100/40 via-brand-200/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-800 text-xs font-semibold mb-6 shadow-xs animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
            <span>Available for new opportunities</span>
          </div>

          {/* Main Hero Headings */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.15] mb-4">
            Hi, I'm <span className="text-neutral-900">Hibba</span>
            <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-brand-700">
              Frontend Developer
            </span>
          </h1>

          {/* Tagline / Positioning Description */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mt-3 mb-8">
            I build clean, responsive and useful web experiences, with a growing focus on practical AI-powered applications.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10 w-full sm:w-auto">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-surface text-sm font-semibold hover:bg-neutral-800 hover:shadow-soft transition-all duration-200 group"
            >
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4 text-neutral-300 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a
              href="/Hibba_Wali_Resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-surface border border-neutral-200 text-neutral-800 text-sm font-semibold hover:border-brand-500 hover:text-brand-700 hover:shadow-soft transition-all duration-200"
            >
              <Download className="w-4 h-4 text-brand-600" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Social Links & Verified Contacts */}
          <div className="flex items-center gap-4 text-neutral-600 pt-2 border-t border-neutral-200/60">
            <a
              href="https://github.com/hibbawali"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <span className="text-neutral-300">•</span>

            <a
              href="https://linkedin.com/in/hibba-wali-09b969409"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>

            <span className="text-neutral-300">•</span>

            <a
              href="mailto:hibbachwali05@gmail.com"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
              aria-label="Email Hibba"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

        </div>

        {/* Highlight Feature Quick Stats Strip */}
        <div className="mt-14 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-surface/70 backdrop-blur-sm border border-neutral-200/80 rounded-2xl p-4 text-center shadow-xs">
            <p className="text-2xl font-bold text-neutral-900">4+</p>
            <p className="text-xs text-neutral-500 font-medium mt-0.5">Shipped Projects</p>
          </div>
          <div className="bg-surface/70 backdrop-blur-sm border border-neutral-200/80 rounded-2xl p-4 text-center shadow-xs">
            <p className="text-2xl font-bold text-brand-700">48h</p>
            <p className="text-xs text-neutral-500 font-medium mt-0.5">Hackathon Release</p>
          </div>
          <div className="bg-surface/70 backdrop-blur-sm border border-neutral-200/80 rounded-2xl p-4 text-center shadow-xs">
            <p className="text-2xl font-bold text-neutral-900">97.1%</p>
            <p className="text-xs text-neutral-500 font-medium mt-0.5">ML Model Accuracy</p>
          </div>
          <div className="bg-surface/70 backdrop-blur-sm border border-neutral-200/80 rounded-2xl p-4 text-center shadow-xs">
            <p className="text-2xl font-bold text-brand-700">Production</p>
            <p className="text-xs text-neutral-500 font-medium mt-0.5">Vercel Deployments</p>
          </div>
        </div>

      </div>
    </section>
  );
}
