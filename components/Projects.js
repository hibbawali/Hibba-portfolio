'use client';

import { ExternalLink, Github, Sparkles, CheckCircle, ArrowUpRight, Award, FileText } from 'lucide-react';

const PROJECTS = [
  {
    title: "ATS Resume Score Checker",
    badge: "Featured Internship Project",
    description: "A web application that analyzes uploaded resumes and generates an automated ATS-compatibility score with detailed recommendations to optimize resume quality.",
    highlight: "Built and shipped during internship at Devonsite. Solved complex multipart file parsing and build runtime issues.",
    features: [
      "PDF & DOCX resume file upload and parsing",
      "ATS compatibility score calculation engine",
      "Resume structure and formatting analysis",
      "AI-driven actionable improvement feedback"
    ],
    tech: ["Next.js", "JavaScript", "API Routes", "File Parsing", "Vercel"],
    github: "https://lnkd.in/dzhDB8H2",
    live: "https://lnkd.in/d_DGfHys",
  },
  {
    title: "CareerPath — Scholarship Finder",
    badge: "48-Hour Hackathon Winner/Ship",
    description: "A full-stack scholarship discovery platform connecting students with higher education funding based on real-time academic and demographic criteria.",
    highlight: "Conceived, engineered, and shipped completely independently in a 48-hour hackathon.",
    features: [
      "Eligibility matching algorithms",
      "Degree, City, and CGPA multi-filtering",
      "Deadline tracking and alerts",
      "Direct WhatsApp scholarship sharing"
    ],
    tech: ["Next.js", "JavaScript", "Full-Stack", "Vercel"],
    github: "https://github.com/hibbawali/Career-Path",
    live: "https://careerpath-tau.vercel.app/",
  },
  {
    title: "Email Spam Classifier",
    badge: "97.1% Accuracy ML Model",
    description: "An end-to-end machine learning system detecting malicious spam using TF-IDF vectorization, evaluated against Naive Bayes and Logistic Regression with error analysis for imbalanced datasets.",
    highlight: "Trained on 5,572 Kaggle messages. Achieved 97.1% accuracy and 0.99 precision with Naive Bayes.",
    features: [
      "Trained on 5,572 SMS Spam Collection dataset",
      "Comparative ML evaluation: Naive Bayes vs Logistic Regression",
      "0.99 Precision & 0.79 Recall with TF-IDF vectorization",
      "Interactive instant web prediction interface"
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "Flask", "TF-IDF", "Joblib"],
    github: "https://github.com/hibbawali/Email-Spam-Classifier",
    live: "https://spamshield-web.vercel.app/",
  },
  {
    title: "Ad Sales Predictor",
    badge: "Polynomial Regression & Data Science",
    description: "An interactive predictive application modeling advertising expenditure impacts on sales performance using polynomial regression algorithms.",
    highlight: "Interactive analytical parameter tuning with real-time prediction curves deployed on Streamlit cloud.",
    features: [
      "Multi-variable polynomial regression modeling",
      "Interactive real-time parameter tweaking",
      "Data visualization of sales yield curves",
      "Cloud-hosted Streamlit deployment"
    ],
    tech: ["Python", "Polynomial Regression", "Streamlit", "Pandas"],
    github: null, // As indicated in plan: TODO - add repository link if available
    live: "https://capstone-01.streamlit.app/",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-neutral-50/60 border-y border-neutral-200/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/70 text-brand-800 text-xs font-semibold mb-3">
              <span>Portfolio Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
              Selected Projects
            </h2>
          </div>
          <p className="text-neutral-600 text-sm sm:text-base max-w-md">
            Production web applications and practical AI systems built, tested, and deployed for real-world utility.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div
              key={index}
              className="group bg-surface rounded-3xl p-7 sm:p-8 border border-neutral-200/90 shadow-soft hover:shadow-soft-hover hover:border-brand-400/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-800 border border-brand-200/60 text-xs font-semibold">
                    <Sparkles className="w-3 h-3 text-brand-600" />
                    {project.badge}
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">0{index + 1}</span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 group-hover:text-brand-800 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Highlight Callout */}
                {project.highlight && (
                  <div className="bg-neutral-50 rounded-xl p-3.5 border border-neutral-100 mb-5 text-xs text-neutral-700 leading-normal">
                    <span className="font-semibold text-brand-800">Impact: </span>
                    {project.highlight}
                  </div>
                )}

                {/* Key Features List */}
                <div className="space-y-2 mb-6">
                  <p className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Key Capabilities</p>
                  {project.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-neutral-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-100 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-neutral-100/70 text-neutral-700 border border-neutral-200/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-700 text-white text-xs font-semibold hover:bg-brand-800 shadow-sm transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-neutral-100 text-neutral-800 text-xs font-semibold hover:bg-neutral-200 hover:text-neutral-900 border border-neutral-200/80 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  ) : (
                    <span className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-50 text-neutral-400 text-xs font-medium border border-neutral-200/50">
                      Repo on request
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Completed Projects Note from Plan */}
        <div className="mt-12 text-center">
          <p className="text-xs text-neutral-500">
            More experimental & domain models (e.g. Decision Trees, XGBoost Churn, and Healthcare dashboards) are available upon request.
          </p>
        </div>

      </div>
    </section>
  );
}
