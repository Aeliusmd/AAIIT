"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", program: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.message.length > 500) return;
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => formBody.append(key, value));
      const response = await fetch("https://readdy.ai/api/form/d8l9or1ph3sqjdbur81g", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formBody.toString(),
      });
      setSubmitStatus(response.ok ? "success" : "error");
      if (response.ok) setFormData({ name: "", email: "", phone: "", program: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden" style={{ minHeight: "800px" }}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://readdy.ai/api/search-image?query=Modern%20technology%20academy%20interior%20with%20large%20floor-to-ceiling%20windows%20overlooking%20city%20at%20dusk%2C%20dark%20navy%20atmosphere%20with%20glowing%20blue%20circuit%20pattern%20decor%20on%20walls%2C%20sleek%20minimalist%20design%2C%20professional%20educational%20facility%2C%20ambient%20blue%20lighting%2C%20dramatic%20evening%20sky%20visible%20through%20windows&width=1800&height=1000&seq=aaiit-contact-bg-2026&orientation=landscape)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1554]/85 via-[#0d1554]/70 to-blue-950/85"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <div className="text-white">
            <div className="text-xs font-bold tracking-widest text-blue-300 mb-4 uppercase">Get In Touch</div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight" style={{ fontFamily: "Syne, sans-serif" }}>
              Start Your Tech Journey Today
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-10 max-w-md">
              Ready to transform your career? Reach out to us to learn more about our programs, enrollment dates, and how our internship guarantee works.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { icon: "ri-mail-line", label: "Email", value: "info@aaiit.academy", href: "mailto:info@aaiit.academy" },
                { icon: "ri-phone-line", label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
                { icon: "ri-map-pin-line", label: "Location", value: "Coming Soon — First Batch Launching 2025", href: "#" },
              ].map((item) => (
                <div key={item.label} className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600/20 border border-blue-400/30 flex-shrink-0">
                    <i className={`${item.icon} text-blue-400 text-xl`}></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-300 mb-0.5">{item.label}</div>
                    <a href={item.href} className="text-white text-sm hover:text-blue-300 transition-colors cursor-pointer">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-600/15 backdrop-blur-md p-7 rounded-2xl border border-blue-400/20">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-600">
                  <i className="ri-information-line text-white text-sm"></i>
                </div>
                <span className="text-white font-semibold text-sm">Free Consultation</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Book a free 30-minute consultation to find the right program for you, understand the curriculum, and learn about our internship placement process.
              </p>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-white rounded-3xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-[#0d1554] mb-2" style={{ fontFamily: "Syne, sans-serif" }}>Apply for Admission</h3>
            <p className="text-gray-500 text-sm mb-7">Fill out the form and our team will contact you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                  placeholder="Your full name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                  placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                  placeholder="+1 (555) 000-0000" />
              </div>
              <div>
                <label htmlFor="program" className="block text-sm font-semibold text-gray-700 mb-1.5">Program Interested In *</label>
                <select id="program" name="program" required value={formData.program} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm cursor-pointer">
                  <option value="">Select a program</option>
                  <option value="qa">Quality Assurance (QA)</option>
                  <option value="ai-fullstack">AI with Fullstack Development</option>
                  <option value="business-analysis">Business Analysis</option>
                  <option value="undecided">Not sure yet — need guidance</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
                <textarea id="message" name="message" rows={3} maxLength={500} value={formData.message} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-sm"
                  placeholder="Any questions or additional information..."></textarea>
                <div className="text-xs text-gray-400 mt-1 text-right">{formData.message.length}/500</div>
              </div>

              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl text-sm">
                  Application submitted! Our team will reach out within 24 hours.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl text-sm">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || formData.message.length > 500}
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed text-sm whitespace-nowrap cursor-pointer"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
