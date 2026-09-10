'use client';

import { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, Sparkles, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = "hibbachwali05@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Simulate submission / mailto fallback
    setFormSubmitted(true);
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/70 text-brand-800 text-xs font-semibold mb-3">
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 mb-3">
            Let's Build Something
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Have an idea, project, or opportunity? I'd love to connect and discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Side: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Direct Email Card with Copy button */}
            <div className="bg-surface rounded-2xl p-6 border border-neutral-200/90 shadow-soft">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5 text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  <Mail className="w-4 h-4 text-brand-600" />
                  <span>Direct Email</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="inline-flex items-center gap-1 text-xs text-brand-700 hover:text-brand-900 font-semibold px-2.5 py-1 rounded-lg hover:bg-brand-50 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-brand-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${email}`}
                className="text-base sm:text-lg font-bold text-neutral-900 hover:text-brand-700 transition-colors break-all"
              >
                {email}
              </a>
              <p className="text-xs text-neutral-500 mt-1">
                Typical response time within 24 hours.
              </p>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://github.com/hibbawali"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-surface rounded-2xl p-5 border border-neutral-200/90 shadow-soft hover:shadow-soft-hover hover:border-brand-400 transition-all duration-200 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-800 group-hover:bg-brand-50 group-hover:text-brand-700 transition-colors">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-900">GitHub</p>
                    <p className="text-xs text-neutral-500">@hibbawali</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-brand-600 transition-colors" />
              </a>

              <a
                href="https://linkedin.com/in/hibba-wali-09b969409"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-surface rounded-2xl p-5 border border-neutral-200/90 shadow-soft hover:shadow-soft-hover hover:border-brand-400 transition-all duration-200 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-800 group-hover:bg-brand-50 group-hover:text-brand-700 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-900">LinkedIn</p>
                    <p className="text-xs text-neutral-500">Hibba Wali</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-brand-600 transition-colors" />
              </a>
            </div>

            {/* Quick Note */}
            <div className="bg-brand-50/70 rounded-2xl p-5 border border-brand-100/90 text-xs text-brand-900 leading-relaxed">
              <span className="font-bold block mb-1">Open for Opportunities</span>
              Available for frontend developer roles, technical internships, and innovative web application projects.
            </div>

          </div>

          {/* Right Side: Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface rounded-3xl p-7 sm:p-8 border border-neutral-200/90 shadow-soft">
              <h3 className="text-lg font-bold text-neutral-900 mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-neutral-500 mb-6">
                Fill out the form below to initiate an inquiry or project discussion.
              </p>

              {formSubmitted ? (
                <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 mx-auto mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-brand-900 mb-1">Opening Mail Client...</h4>
                  <p className="text-xs text-brand-700">
                    If your email app did not open automatically, you can write directly to <strong>{email}</strong>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 text-xs font-semibold text-brand-800 underline hover:text-brand-900"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5" htmlFor="email">
                      Your Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 mb-1.5" htmlFor="message">
                      Message / Project Details
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      placeholder="Tell me about your project, timeline, or role..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-neutral-50/50 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 shadow-sm transition-colors"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
