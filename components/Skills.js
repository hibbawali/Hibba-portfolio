import { Globe, Database, Brain, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend & Web",
      icon: Globe,
      description: "Building responsive, modern, and high-performance interfaces",
      skills: ["HTML", "CSS", "JavaScript", "Next.js", "Flask", "REST APIs"],
    },
    {
      name: "Programming & Data",
      icon: Database,
      description: "Core algorithms, data analysis, and data manipulation",
      skills: ["Python", "SQL", "Pandas", "NumPy"],
    },
    {
      name: "Machine Learning",
      icon: Brain,
      description: "Applied model architecture, text processing, and evaluation",
      skills: ["Scikit-learn", "TensorFlow / Keras", "TF-IDF", "ML Model Development"],
    },
    {
      name: "Tools & Platforms",
      icon: Wrench,
      description: "Version control, hosting, databases, and continuous deployment",
      skills: ["Git", "GitHub", "MySQL", "Vercel", "Streamlit", "AWS (basic)"],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/70 text-brand-800 text-xs font-semibold mb-3">
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 mb-3">
            Skills & Core Technologies
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            A verified set of tools and technologies I use across frontend engineering and practical AI projects.
          </p>
        </div>

        {/* Categories 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-surface rounded-3xl p-7 border border-neutral-200/80 shadow-soft hover:shadow-soft-hover hover:border-brand-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-11 h-11 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-700">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-900">
                        {category.name}
                      </h3>
                      <p className="text-xs text-neutral-500">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="h-px bg-neutral-100 my-4" />

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-neutral-50 border border-neutral-200/80 text-neutral-700 hover:bg-brand-50 hover:text-brand-800 hover:border-brand-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
