import { Layout, Cpu, Rocket, CheckCircle2 } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Layout,
      title: "Clean Frontend Architecture",
      description: "Crafting structured, responsive interfaces with Next.js, React, and modern CSS tailored for performance and usability."
    },
    {
      icon: Cpu,
      title: "Practical AI & ML Integration",
      description: "Bridging frontend interfaces with machine learning workflows, API endpoints, and natural user interactions."
    },
    {
      icon: Rocket,
      title: "Concept to Deployment",
      description: "Taking projects from the whiteboard through architecture, debugging runtime issues, and shipping reliably on Vercel."
    }
  ];

  return (
    <section id="about" className="py-20 bg-neutral-50/50 border-y border-neutral-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/70 text-brand-800 text-xs font-semibold mb-3">
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
            Turning concepts into functional, high-impact web products
          </h2>
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story / Human Bio */}
          <div className="lg:col-span-6 space-y-5 text-neutral-600 leading-relaxed text-base sm:text-lg">
            <p>
              I'm a <span className="font-semibold text-neutral-900">Frontend Developer</span> who enjoys turning ideas into clean, responsive, and useful web applications.
            </p>
            <p>
              I work with modern web technologies and also explore artificial intelligence and machine learning through practical projects. I truly enjoy taking an idea from the initial concept through development, debugging, and deployment.
            </p>
            <p>
              Whether it's building a 48-hour hackathon project that connects students with scholarship opportunities, or engineering an ATS resume checker that parses complex documents in real-time, I'm continuously learning, building real-world software, and improving my problem-solving skills with every build.
            </p>
            
            <div className="pt-2 flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5 text-sm text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>Focus on user experience, clean aesthetics, and component reusability</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>Hands-on experience resolving production build and runtime issues</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-neutral-700">
                <CheckCircle2 className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span>Self-starter with strong communication and leadership experience</span>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-surface border border-neutral-200/80 shadow-soft hover:shadow-soft-hover hover:border-brand-300 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-700 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
