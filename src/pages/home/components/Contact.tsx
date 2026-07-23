import { useState } from 'react';
import InfiniteA from '@/pages/home/components/InfiniteA';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
    website_alt: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.message.length > 500) return;

    if (formData.website_alt.trim() !== '') {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', program: '', message: '', website_alt: '' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      formBody.append('name', formData.name);
      formBody.append('email', formData.email);
      formBody.append('phone', formData.phone);
      formBody.append('program', formData.program);
      formBody.append('message', formData.message);

      const response = await fetch('https://readdy.ai/api/form/d8l9or1ph3sqjdbur81g', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody.toString(),
      });

      const responseText = await response.text();
      let parsed: any;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      if (response.ok && parsed?.code === 'OK') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', program: '', message: '', website_alt: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-28 px-6 lg:px-12 bg-blue-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-14">
          <div className="text-xs font-bold tracking-widest text-blue-600 mb-3 uppercase">Get In Touch</div>
          <h2
            className="text-5xl lg:text-6xl font-bold text-gray-800 mb-5"
            style={{ fontFamily: "'Inclusive Sans', sans-serif", fontWeight: 700 }}
          >
            Start Your Tech Journey Today
          </h2>
          <p className="text-gray-500 max-w-xl text-base leading-relaxed">
            Ready to transform your career? Reach out to learn more about our programs, enrollment dates, and internship opportunities.
          </p>
        </div>

        <InfiniteA variant="divider" className="mb-14" />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-md">
              Ready to transform your career? Reach out to us to learn more about our programs, enrollment dates, and how our internship program works.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { icon: 'ri-mail-line', label: 'Email', value: 'Info@AAIIT.lk', href: 'mailto:Info@AAIIT.lk' },
                { icon: 'ri-phone-line', label: 'Phone', value: '0778449897', href: 'tel:0778449897' },
                { icon: 'ri-map-pin-line', label: 'Location', value: '01st floor,301/2, 1/1,Galle road, kollupitiya,00300 — First Batch Launching 2026', href: '#' },
              ].map((item) => (
                <div key={item.label} className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-blue-200/60 flex-shrink-0">
                    <i className={`${item.icon} text-blue-600 text-xl`}></i>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-0.5" style={{ fontFamily: "'Inclusive Sans', sans-serif" }}>
                      {item.label}
                    </div>
                    <a
                      href={item.href}
                      className="text-gray-800 text-sm hover:text-blue-600 transition-colors cursor-pointer"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-7 border border-blue-200/60">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100">
                  <i className="ri-information-line text-blue-600 text-sm"></i>
                </div>
                <span className="text-gray-800 font-semibold text-sm" style={{ fontFamily: "'Inclusive Sans', sans-serif" }}>
                  Free Consultation
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Book a free 30-minute consultation to find the right program for you, understand the curriculum, and learn about our internship placement process.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-10 border border-blue-200/60">
            <h3
              className="text-2xl font-bold text-gray-800 mb-2"
              style={{ fontFamily: "'Inclusive Sans', sans-serif", fontWeight: 700 }}
            >
              Apply for Admission
            </h3>
            <p className="text-gray-500 text-sm mb-7">Fill out the form and our team will contact you within 24 hours.</p>

            <form id="aaiit-contact-form" data-readdy-form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="website_alt"
                value={formData.website_alt}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                readOnly={false}
              />

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1.5" style={{ fontFamily: "'Inclusive Sans', sans-serif" }}>
                  Full Name *
                </label>
                <input
                  type="text" id="name" name="name" required
                  value={formData.name} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all text-sm"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5" style={{ fontFamily: "'Inclusive Sans', sans-serif" }}>
                  Email Address *
                </label>
                <input
                  type="email" id="email" name="email" required
                  value={formData.email} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all text-sm"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5" style={{ fontFamily: "'Inclusive Sans', sans-serif" }}>
                  Phone Number
                </label>
                <input
                  type="tel" id="phone" name="phone"
                  value={formData.phone} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all text-sm"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div>
                <label htmlFor="program" className="block text-sm font-semibold text-gray-700 mb-1.5" style={{ fontFamily: "'Inclusive Sans', sans-serif" }}>
                  Program Interested In *
                </label>
                <select
                  id="program" name="program" required
                  value={formData.program} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all text-sm cursor-pointer"
                >
                  <option value="">Select a program</option>
                  <option value="qa">Quality Assurance (QA)</option>
                  <option value="ai-fullstack">AI with Fullstack Development</option>
                  <option value="business-analysis">Business Analysis</option>
                  <option value="undecided">Not sure yet — need guidance</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5" style={{ fontFamily: "'Inclusive Sans', sans-serif" }}>
                  Message
                </label>
                <textarea
                  id="message" name="message" rows={3} maxLength={500}
                  value={formData.message} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all resize-none text-sm"
                  placeholder="Any questions or additional information..."
                ></textarea>
                <div className="text-xs text-gray-400 mt-1 text-right">{formData.message.length}/500</div>
              </div>

              {submitStatus === 'success' && (
                <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded-xl text-sm">
                  Application submitted! Our team will reach out within 24 hours.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl text-sm">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || formData.message.length > 500}
                className="w-full bg-blue-500 text-white py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed text-sm whitespace-nowrap cursor-pointer"
                style={{ fontFamily: "'Inclusive Sans', sans-serif" }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
