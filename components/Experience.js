import { Briefcase, Calendar, Building2, ChevronRight, Check } from 'lucide-react';

const EXPERIENCES = [
  {
    role: "Software Engineering Intern",
    company: "Devonsite",
    period: "2026 — Present",
    type: "Engineering",
    points: [
      "Contributing actively to production web applications built with Next.js and Tailwind CSS from setup to feature completion.",
      "Independently diagnosing and resolving environment and build issues, including permission errors, build failures, and import mismatches.",
      "Engineered and deployed the ATS Resume Score Checker web app as part of the core internship deliverables."
    ]
  },
  {
    role: "Machine Learning Intern",
    company: "Arch Technologies",
    period: "May 2026 — July 2026",
    type: "AI / ML",
    points: [
      "Took end-to-end ownership of two machine learning projects from dataset preprocessing to deployment with minimal guidance.",
      "Built and optimized a text classification engine evaluating Naive Bayes vs Logistic Regression, achieving 97.1% accuracy.",
      "Containerized and deployed the text classifier as an interactive Flask application.",
      "Trained and deployed a Convolutional Neural Network (CNN) for handwritten character and digit recognition using TensorFlow/Keras."
    ]
  },
  {
    role: "University Ambassador",
    company: "UCMS & GCUF",
    period: "2024 — Present",
    type: "Leadership",
    points: [
      "Represent the university across student bodies and external delegate events.",
      "Act as an active liaison and communication channel between students and department administration."
    ]
  },
  {
    role: "Information Secretary & Event Manager",
    company: "Dramatic Society, UCMS & GCUF",
    period: "2024 — Present",
    type: "Management",
    points: [
      "Manage comprehensive event coordination, documentation, scheduling, and official society announcements.",
      "Facilitate cross-team logistics and public communication for university-wide arts and cultural events."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/70 text-brand-800 text-xs font-semibold mb-3">
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 mb-3">
            Experience & Leadership
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Demonstrated engineering experience shipping real applications, alongside institutional leadership.
          </p>
        </div>

        {/* Timeline / Card List */}
        <div className="relative border-l-2 border-neutral-200 ml-4 md:ml-6 space-y-10">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative pl-7 md:pl-10 group">
              {/* Dot indicator */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-surface border-4 border-brand-600 group-hover:scale-125 transition-transform" />

              {/* Card */}
              <div className="bg-surface rounded-2xl p-6 sm:p-7 border border-neutral-200/90 shadow-soft hover:shadow-soft-hover hover:border-brand-300 transition-all duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-brand-700 mt-0.5">
                      <Building2 className="w-4 h-4 text-brand-600" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-700 border border-neutral-200/60">
                      {exp.period}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-brand-50 text-brand-800 border border-brand-200/60">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="h-px bg-neutral-100 my-4" />

                <ul className="space-y-2.5">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      <Check className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
