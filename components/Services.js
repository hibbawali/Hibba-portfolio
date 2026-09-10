import { Monitor, Layers, Sparkles, CloudCheck, CheckCircle2 } from 'lucide-react';

const SERVICES = [
  {
    title: "Frontend Development",
    description: "Building modern, responsive, and intuitive user interfaces that look sharp across mobile, tablet, and high-resolution desktop screens.",
    deliverables: [
      "Pixel-perfect responsive HTML/CSS/Tailwind implementations",
      "Interactive React & Next.js client components",
      "Accessibility and cross-browser consistency"
    ],
  },
  {
    title: "Web Applications",
    description: "Developing robust, practical web applications with seamless client-server communications, API routing, and structured state.",
    deliverables: [
      "Next.js App Router architecture and server/client state",
      "RESTful API integration and multipart file parsing",
      "Authentication and dynamic data rendering"
    ],
  },
  {
    title: "AI-Powered Web Experiences",
    description: "Integrating practical AI & machine learning capabilities directly into intuitive frontend experiences to solve real user problems.",
    deliverables: [
      "Natural language and TF-IDF classification interfaces",
      "Model inference endpoints using Flask or Next.js APIs",
      "Interactive data prediction and parameter visualizations"
    ],
  },
  {
    title: "Production Deployment & Debugging",
    description: "Deploying web applications to production environments and diagnosing runtime, build, or permission issues.",
    deliverables: [
      "Automated CI/CD pipelines with Vercel and GitHub",
      "Build optimization, dependency conflict resolution",
      "Custom domain linking and SSL setup"
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-neutral-50/60 border-y border-neutral-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/70 text-brand-800 text-xs font-semibold mb-3">
            <span>What I Offer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 mb-3">
            Services & Expertise
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Focused, practical frontend development and AI-integrated web solutions tailored for real-world reliability.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="bg-surface rounded-3xl p-7 sm:p-8 border border-neutral-200/80 shadow-soft hover:shadow-soft-hover hover:border-brand-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-bold flex items-center justify-center">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-neutral-100">
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
