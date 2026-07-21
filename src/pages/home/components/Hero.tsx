import InfiniteA from '@/pages/home/components/InfiniteA';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-blue-50"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://readdy.ai/api/search-image?query=Cool%20crisp%20modern%20technology%20academy%20interior%20with%20soft%20daylight%20streaming%20through%20large%20floor-to-ceiling%20windows%2C%20diverse%20students%20collaborating%20around%20clean%20white%20desks%20with%20silver%20laptops%20open%2C%20navy%20blue%20and%20sky%20blue%20accent%20walls%20and%20decor%20throughout%20the%20space%2C%20soft%20grey%20and%20white%20furniture%2C%20lush%20green%20plants%20for%20contrast%2C%20contemporary%20minimalist%20Scandinavian%20design%2C%20calm%20inspiring%20academic%20atmosphere%2C%20soft%20diffused%20natural%20lighting%2C%20prominent%20blue%20branding%20elements%20on%20walls%2C%20modern%20ceiling%20lights%20with%20cool%20white%20tone&width=1800&height=1000&seq=aaiit-hero-blue-2026&orientation=landscape&nocache=true)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/55 to-blue-50/85"></div>

      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(37,99,235,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.4) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-300/50 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-blue-700 text-sm font-medium" style={{ fontFamily: "'Inclusive Sans', sans-serif" }}>
                Now Enrolling — Batch 2026
              </span>
            </div>

            <h1
              className="text-5xl lg:text-7xl mb-6 leading-tight text-gray-800"
              style={{ fontFamily: "'Inclusive Sans', sans-serif", fontWeight: 700 }}
            >
              Learn Today.<br />Gain Experience Tomorrow.
            </h1>

            <p className="text-lg mb-6 text-gray-800 max-w-xl leading-relaxed">
              At AAIIT, learning doesn&apos;t stop at the classroom. After your course, you&apos;ll join our internship 
               program to work on real projects, learn from mentors, and build a standout portfolio.
            </p>

            <div className="flex items-center space-x-3 mb-10">
              <span className="text-xl">🎯</span>
              <span className="text-gray-800 text-lg font-semibold" style={{ fontFamily: "'Inclusive Sans', sans-serif" }}>
                From Learning to Industry Experience — All in One Place.
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-blue-500 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-blue-600 transition-all inline-flex items-center justify-center space-x-2 whitespace-nowrap cursor-pointer"
                style={{ fontFamily: "'Inclusive Sans', sans-serif" }}
              >
                <span>Enroll Now</span>
                <i className="ri-arrow-right-line text-xl group-hover:translate-x-1 transition-transform"></i>
              </button>
              <button
                onClick={() => scrollToSection('courses')}
                className="border  bg-blue-50  border-blue-300/50 font-medium text-blue-700 px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-50 hover:border-blue-300 transition-all inline-flex items-center justify-center whitespace-nowrap cursor-pointer"
                style={{ fontFamily: "'Inclusive Sans', sans-serif" }}
              >
                Explore Courses
              </button>
            </div>

            <div className="flex flex-wrap gap-8">
              {[
                { value: '3', label: 'Programs', icon: 'ri-book-open-line' },
                { value: '4 Mo', label: 'Duration', icon: 'ri-time-line' },
                { value: '100%', label: 'Internship', icon: 'ri-briefcase-line' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center space-x-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 border border-blue-300/40">
                    <i className={`${stat.icon} text-blue-600 text-lg`}></i>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800" style={{ fontFamily: "'Inclusive Sans', sans-serif", fontWeight: 700 }}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-3xl border border-blue-200/60 shadow-sm">
                <div className="flex items-center space-x-3 mb-6">
                  <img
                    src="https://storage.readdy-site.link/project_files/547fd983-bf4d-4d5e-8db3-623109671629/a063238e-99e1-4e72-b2c3-f5004b636dc5_compressed_ChatGPT-Image-Jul-13-2026-11_44_07-PM-1.webp"
                    alt="AAIIT Logo"
                    className="w-14 h-14 object-contain rounded-xl bg-blue-50 p-1.5"
                  />
                  <div>
                    <div className="text-gray-800 font-bold text-lg" style={{ fontFamily: "'Inclusive Sans', sans-serif", fontWeight: 700 }}>
                      AAIIT
                    </div>
                    <div className="text-blue-600 text-xs">Academy of AI &amp; Information Technology</div>
                  </div>
                  <div className="ml-auto">
                    <InfiniteA size="sm" />
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { title: 'Quality Assurance (QA)', icon: 'ri-shield-check-line', color: 'bg-blue-100 text-blue-700' },
                    { title: 'AI + Fullstack Development', icon: 'ri-brain-line', color: 'bg-blue-100 text-blue-700' },
                    { title: 'Business Analysis', icon: 'ri-bar-chart-2-line', color: 'bg-blue-100 text-blue-700' },
                  ].map((prog) => (
                    <div key={prog.title} className="flex items-center space-x-3 bg-gray-50 px-4 py-3 rounded-xl border border-gray-100">
                      <div className={`w-8 h-8 flex items-center justify-center rounded-lg ${prog.color}`}>
                        <i className={`${prog.icon} text-sm`}></i>
                      </div>
                      <span className="text-gray-800 text-sm font-medium">{prog.title}</span>
                      <div className="ml-auto">
                        <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full whitespace-nowrap">6 Months</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {['bg-blue-500', 'bg-blue-600', 'bg-blue-400', 'bg-indigo-500'].map((c, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}
                      >
                        {['S', 'R', 'K', 'M'][i]}
                      </div>
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm">Join our first batch!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 text-gray-400">
        <span className="text-xs tracking-widest">SCROLL</span>
        <i className="ri-arrow-down-line animate-bounce text-lg"></i>
      </div>
    </section>
  );
}