import { useState, useEffect } from 'react';
import logo from '@/images/Logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Courses', id: 'courses' },
    { label: 'Story', id: 'our-story' },
    { label: 'Internship', id: 'internship' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-blue-100' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <img
              src={logo}
              alt="AAIIT Logo"
              className="w-28 h-28 object-contain rounded-lg"
            />
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors cursor-pointer whitespace-nowrap"
                style={{ fontFamily: "'Inclusive Sans', sans-serif" }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="hidden md:block px-6 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap cursor-pointer bg-blue-500 text-white hover:bg-blue-600"
            style={{ fontFamily: "'Inclusive Sans', sans-serif" }}
          >
            Enroll Now
          </button>

          <button
            className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <i className={`${mobileOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-blue-100 py-4 rounded-b-2xl shadow-sm">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                className="block px-4 py-3 text-gray-600 hover:text-blue-600 text-sm font-medium cursor-pointer"
                style={{ fontFamily: "'Inclusive Sans', sans-serif" }}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-blue-500 text-white py-3 rounded-full text-sm font-semibold cursor-pointer whitespace-nowrap"
                style={{ fontFamily: "'Inclusive Sans', sans-serif" }}
              >
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}