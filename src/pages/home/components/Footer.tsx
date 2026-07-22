import InfiniteA from '@/pages/home/components/InfiniteA';
import logo from '@/images/Logo.png';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-white border-t border-blue-100 py-16 px-6 lg:px-12">
      <div className="absolute right-8 top-8 opacity-[0.04] pointer-events-none select-none">
        <InfiniteA size="xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
              <img
                src={logo}
                alt="AAIIT Logo"
                className="w-22 h-16 pb-4 "
              />
            <p className="text-gray-500 text-sm leading-relaxed">
              Empowering the next generation of tech professionals with industry-ready skills and internship opportunities.
            </p>
          </div>

          <div>
            <h4 className="text-gray-800 text-sm font-bold mb-4 uppercase tracking-wider" style={{ fontFamily: "'Inclusive Sans', sans-serif", fontWeight: 600 }}>
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Us', id: 'about' },
                { label: 'Our Story', id: 'our-story' },
                { label: 'Our Courses', id: 'courses' },
                { label: 'Internship', id: 'internship' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                    className="text-gray-500 text-sm hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-800 text-sm font-bold mb-4 uppercase tracking-wider" style={{ fontFamily: "'Inclusive Sans', sans-serif", fontWeight: 600 }}>
              Programs
            </h4>
            <ul className="space-y-3">
              {[
                'Quality Assurance (QA)',
                'AI with Fullstack Development',
                'Business Analysis',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#courses"
                    onClick={(e) => { e.preventDefault(); scrollToSection('courses'); }}
                    className="text-gray-500 text-sm hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-800 text-sm font-bold mb-4 uppercase tracking-wider" style={{ fontFamily: "'Inclusive Sans', sans-serif", fontWeight: 600 }}>
              Connect
            </h4>
            <ul className="space-y-3 mb-6">
              {[
                { icon: 'ri-linkedin-box-fill', label: 'LinkedIn', href: 'https://linkedin.com' },
                { icon: 'ri-facebook-box-fill', label: 'Facebook', href: 'https://facebook.com' },
                { icon: 'ri-instagram-fill', label: 'Instagram', href: 'https://instagram.com' },
                { icon: 'ri-mail-fill', label: 'info@aaiit.academy', href: 'mailto:info@aaiit.academy' },
              ].map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 text-sm hover:text-blue-600 transition-colors flex items-center space-x-2 cursor-pointer"
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className={`${social.icon} text-lg`}></i>
                    </div>
                    <span>{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-100 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2026 AAIIT — Academy of Artificial Intelligence &amp; Information Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}