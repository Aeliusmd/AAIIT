"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const navLinks = ["Home", "About", "Courses", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection("home"); }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <img
              src="https://static.readdy.ai/image/306c0f034255580e0c7c21250ba38e98/66fba1f96d594114d5ec39f912317ddf.jpeg"
              alt="AAIIT Logo"
              className="w-12 h-12 object-contain rounded-lg"
            />
            <div className="hidden sm:block">
              <div
                className={`font-bold text-lg leading-tight transition-colors ${
                  isScrolled ? "text-[#0d1554]" : "text-white"
                }`}
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                AAIIT
              </div>
              <div className={`text-xs leading-tight transition-colors ${isScrolled ? "text-[#1a27d9]" : "text-blue-200"}`}>
                Academy of AI &amp; IT
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.toLowerCase()); }}
                className={`text-sm font-medium transition-colors cursor-pointer whitespace-nowrap ${
                  isScrolled ? "text-[#0d1554] hover:text-blue-600" : "text-white/90 hover:text-white"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className={`hidden md:block px-6 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
              isScrolled
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-white text-[#0d1554] hover:bg-blue-50"
            }`}
          >
            Enroll Now
          </button>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden w-10 h-10 flex items-center justify-center cursor-pointer ${
              isScrolled ? "text-[#0d1554]" : "text-white"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <i className={`${mobileOpen ? "ri-close-line" : "ri-menu-line"} text-2xl`}></i>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.toLowerCase()); }}
                className="block px-4 py-3 text-[#0d1554] hover:text-blue-600 text-sm font-medium cursor-pointer"
              >
                {item}
              </a>
            ))}
            <div className="px-4 pt-2">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full bg-blue-600 text-white py-3 rounded-full text-sm font-semibold cursor-pointer"
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
