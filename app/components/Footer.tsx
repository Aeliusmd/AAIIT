"use client";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0d1554] py-16 px-6 mt-8 lg:px-12 mx-6 mb-6 rounded-3xl relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 50%, #3b82f6 0%, transparent 40%), radial-gradient(circle at 90% 50%, #1d4ed8 0%, transparent 40%)",
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 right-0 text-center font-bold opacity-5 pointer-events-none select-none"
        style={{ fontSize: "160px", lineHeight: "1", color: "#1d4ed8", fontFamily: "Syne, sans-serif" }}
      >
        AAIIT
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-5">
              <img
                src="https://static.readdy.ai/image/306c0f034255580e0c7c21250ba38e98/66fba1f96d594114d5ec39f912317ddf.jpeg"
                alt="AAIIT Logo"
                className="w-12 h-12 object-contain rounded-xl bg-white p-1"
              />
              <div>
                <div className="text-white font-bold text-lg" style={{ fontFamily: "Syne, sans-serif" }}>AAIIT</div>
                <div className="text-blue-400 text-xs">Academy of AI &amp; IT</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering the next generation of tech professionals with industry-ready skills and guaranteed internships.
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-bold mb-4 uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-3">
              {[{ label: "Home", id: "home" }, { label: "About Us", id: "about" }, { label: "Our Courses", id: "courses" }, { label: "Contact", id: "contact" }].map((item) => (
                <li key={item.label}>
                  <a href={`#${item.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                    className="text-gray-400 text-sm hover:text-blue-400 transition-colors cursor-pointer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-bold mb-4 uppercase tracking-wider">Programs</h4>
            <ul className="space-y-3">
              {["Quality Assurance (QA)", "AI with Fullstack Development", "Business Analysis"].map((item) => (
                <li key={item}>
                  <a href="#courses" onClick={(e) => { e.preventDefault(); scrollToSection("courses"); }}
                    className="text-gray-400 text-sm hover:text-blue-400 transition-colors cursor-pointer">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-bold mb-4 uppercase tracking-wider">Connect</h4>
            <ul className="space-y-3">
              {[
                { icon: "ri-linkedin-box-fill", label: "LinkedIn", href: "https://linkedin.com" },
                { icon: "ri-facebook-box-fill", label: "Facebook", href: "https://facebook.com" },
                { icon: "ri-instagram-fill", label: "Instagram", href: "https://instagram.com" },
                { icon: "ri-mail-fill", label: "info@aaiit.academy", href: "mailto:info@aaiit.academy" },
              ].map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer"
                    className="text-gray-400 text-sm hover:text-blue-400 transition-colors flex items-center space-x-2 cursor-pointer">
                    <i className={`${social.icon} text-lg`}></i>
                    <span>{social.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <p className="text-gray-500 text-sm">
            © 2026 AAIIT — Academy of Artificial Intelligence &amp; Information Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
