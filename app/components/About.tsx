export default function About() {
  const pillars = [
    { icon: "ri-lightbulb-flash-line", title: "Industry-Aligned Curriculum", desc: "Programs built with direct input from tech companies to match real job requirements." },
    { icon: "ri-user-star-line", title: "Expert Mentors", desc: "Learn from senior professionals with 10+ years of hands-on industry experience." },
    { icon: "ri-briefcase-4-line", title: "Guaranteed Internship", desc: "Every graduate is placed in a real internship to kickstart their professional journey." },
    { icon: "ri-global-line", title: "Global Standards", desc: "Certifications and skills that are recognized and valued by employers worldwide." },
  ];

  return (
    <section id="about" className="py-28 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left image */}
          <div className="relative">
            <div
              className="w-full h-[560px] rounded-3xl bg-cover bg-top overflow-hidden"
              style={{
                backgroundImage:
                  "url(https://readdy.ai/api/search-image?query=Modern%20technology%20training%20classroom%20with%20diverse%20students%20working%20on%20laptops%20and%20multiple%20screens%20showing%20code%20and%20data%20visualizations%2C%20professional%20instructor%20guiding%20group%2C%20bright%20spacious%20room%20with%20blue%20accent%20lighting%2C%20clean%20minimalist%20interior%2C%20focused%20learning%20atmosphere%2C%20state-of-the-art%20IT%20lab%20environment&width=800&height=1000&seq=aaiit-about-main-2026&orientation=portrait)",
              }}
            />
            <div className="absolute -bottom-6 -right-6 bg-[#0d1554] text-white px-8 py-6 rounded-2xl shadow-xl">
              <div className="text-4xl font-bold text-blue-400 mb-1" style={{ fontFamily: "Syne, sans-serif" }}>100%</div>
              <div className="text-sm text-gray-300 whitespace-nowrap">Internship Placement</div>
            </div>
            <div className="absolute top-6 -left-4 bg-blue-600 text-white px-5 py-3 rounded-xl shadow-lg">
              <div className="text-2xl font-bold" style={{ fontFamily: "Syne, sans-serif" }}>3</div>
              <div className="text-xs whitespace-nowrap">Programs</div>
            </div>
          </div>

          {/* Right content */}
          <div>
            <div className="text-xs font-bold tracking-widest text-blue-600 mb-4 uppercase">About AAIIT</div>
            <h2 className="text-5xl font-bold text-[#0d1554] mb-6 leading-tight" style={{ fontFamily: "Syne, sans-serif" }}>
              Shaping the Next Generation of Tech Professionals
            </h2>
            <p className="text-base text-gray-600 leading-relaxed mb-5">
              AAIIT — Academy of Artificial Intelligence &amp; Information Technology — is a forward-thinking institute
              dedicated to empowering aspiring tech professionals with the skills, knowledge, and real-world experience they need to succeed.
            </p>
            <p className="text-base text-gray-600 leading-relaxed mb-8">
              Our carefully designed 6-month programs are intensive, practical, and career-focused. We don't just teach theory —
              we build real-world problem solvers who are ready to step into the workforce from day one. Upon graduation, every
              student receives a guaranteed internship placement to launch their career with confidence.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {pillars.map((p) => (
                <div key={p.title} className="bg-gray-50 rounded-2xl p-5 hover:bg-blue-50 transition-colors group">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <i className={`${p.icon} text-lg`}></i>
                  </div>
                  <h4 className="text-sm font-bold text-[#0d1554] mb-1">{p.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision strip */}
        <div className="mt-20 bg-[#0d1554] rounded-3xl p-10 lg:p-14 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 50%, #1d4ed8 0%, transparent 50%)",
            }}
          ></div>
          <div className="relative z-10 grid md:grid-cols-3 gap-10 text-white">
            {[
              { label: "Our Mission", text: "To democratize access to high-quality tech education and produce industry-ready professionals who drive innovation." },
              { label: "Our Vision", text: "To become the region's most trusted academy for AI and IT training, bridging the gap between education and industry." },
              { label: "Our Promise", text: "Every student who completes our program gets a real internship — no exceptions. We're invested in your success." },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-3xl font-bold text-blue-400 mb-2" style={{ fontFamily: "Syne, sans-serif" }}>{item.label}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
