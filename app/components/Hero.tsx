"use client";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-top"
        style={{
          backgroundImage:
            "url(https://readdy.ai/api/search-image?query=Futuristic%20technology%20academy%20campus%20with%20glowing%20digital%20circuit%20patterns%20and%20neural%20network%20visualizations%20floating%20in%20the%20air%2C%20dark%20navy%20blue%20deep%20space%20atmosphere%2C%20students%20working%20on%20holographic%20screens%2C%20modern%20sleek%20architecture%2C%20dramatic%20lighting%20with%20electric%20blue%20accents%2C%20high-tech%20professional%20educational%20environment&width=1800&height=1000&seq=aaiit-hero-bg-2026&orientation=landscape)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1554]/80 via-[#0d1554]/60 to-[#0d1554]/80"></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left */}
          <div className="lg:w-1/2 text-white">
            

            <h1
              className="text-5xl lg:text-7xl mb-6 leading-tight font-bold"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Launch Your Tech Career in <br />
              <span className="text-blue-400">6 Months</span>
            </h1>

            <p className="text-lg mb-8 text-white max-w-xl leading-relaxed">
              Join AAIIT — Academy of Artificial Intelligence &amp; Information
              Technology. Industry-ready programs in QA, AI with Fullstack
              Development, and Business Analysis — with a guaranteed internship
              upon completion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollToSection("courses")}
                className="group bg-blue-600 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-blue-700 transition-all inline-flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer"
              >
                <span>Explore Programs</span>
                <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform"></i>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border border-white/30 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center whitespace-nowrap cursor-pointer"
              >
                Apply Now
              </button>
            </div>

            <div className="flex flex-wrap gap-8">
              {[
                { value: "3", label: "Programs", icon: "ri-book-open-line" },
                { value: "6 Mo", label: "Duration", icon: "ri-time-line" },
                {
                  value: "100%",
                  label: "Internship",
                  icon: "ri-briefcase-line",
                },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600/20 border border-blue-400/30">
                    <i className={`${stat.icon} text-blue-400 text-lg`}></i>
                  </div>
                  <div>
                    <div
                      className="text-2xl font-bold text-white"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right card */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                <div className="flex items-center space-x-3 mb-6">
                  <img
                    src="https://static.readdy.ai/image/306c0f034255580e0c7c21250ba38e98/66fba1f96d594114d5ec39f912317ddf.jpeg"
                    alt="AAIIT Logo"
                    className="w-16 h-16 object-contain rounded-xl bg-white p-1"
                  />
                  <div>
                    <div
                      className="text-white font-bold text-lg"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      AAIIT
                    </div>
                    <div className="text-blue-300 text-xs">
                      Academy of AI &amp; Information Technology
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Quality Assurance (QA)",
                      icon: "ri-shield-check-line",
                      color: "bg-emerald-500/20 text-emerald-300",
                    },
                    {
                      title: "AI + Fullstack Development",
                      icon: "ri-brain-line",
                      color: "bg-blue-500/20 text-blue-300",
                    },
                    {
                      title: "Business Analysis",
                      icon: "ri-bar-chart-2-line",
                      color: "bg-amber-500/20 text-amber-300",
                    },
                  ].map((prog) => (
                    <div
                      key={prog.title}
                      className="flex items-center space-x-3 bg-white/5 px-4 py-3 rounded-xl border border-white/10"
                    >
                      <div
                        className={`w-8 h-8 flex items-center justify-center rounded-lg ${prog.color}`}
                      >
                        <i className={`${prog.icon} text-sm`}></i>
                      </div>
                      <span className="text-white text-sm font-medium">
                        {prog.title}
                      </span>
                      <div className="ml-auto">
                        <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full whitespace-nowrap">
                          6 Months
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {[
                      "bg-blue-500",
                      "bg-emerald-500",
                      "bg-amber-500",
                      "bg-rose-500",
                    ].map((c, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-full ${c} border-2 border-[#0d1554] flex items-center justify-center text-white text-xs font-bold`}
                      >
                        {["A", "B", "C", "D"][i]}
                      </div>
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">
                    Join our first batch!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-white/50">
        <span className="text-xs tracking-widest">SCROLL</span>
        <i className="ri-arrow-down-line animate-bounce text-lg"></i>
      </div>
    </section>
  );
}
