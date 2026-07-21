import InfiniteA from '@/pages/home/components/InfiniteA';

export default function About() {
  const pillars = [
    {
      icon: 'ri-lightbulb-flash-line',
      title: 'Industry-Aligned Curriculum',
      desc: 'Programs built with direct input from tech companies to match real job requirements.',
    },
    {
      icon: 'ri-user-star-line',
      title: 'Expert Mentors',
      desc: 'Learn from senior professionals with 10+ years of hands-on industry experience.',
    },
    {
      icon: 'ri-briefcase-4-line',
      title: 'Internship Program',
      desc: 'Every eligible graduate gets the opportunity to work on real projects and build their portfolio.',
    },
    {
      icon: 'ri-global-line',
      title: 'Global Standards',
      desc: 'Certifications and skills that are recognized and valued by employers worldwide.',
    },
  ];

  return (
    <section id="about" className="py-28 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div
              className="w-full h-[560px] rounded-3xl bg-cover bg-top overflow-hidden"
              style={{
                backgroundImage:
                  'url(https://readdy.ai/api/search-image?query=Bright%20modern%20technology%20training%20classroom%20with%20diverse%20students%20working%20on%20laptops%20in%20warm%20natural%20lighting%2C%20professional%20instructor%20guiding%20small%20group%20at%20table%2C%20multiple%20screens%20showing%20code%20and%20data%2C%20blue%20accent%20decor%20throughout%2C%20plants%20and%20contemporary%20decor%2C%20clean%20minimalist%20interior%2C%20welcoming%20focused%20learning%20atmosphere%2C%20state-of-the-art%20IT%20lab%20with%20soft%20lighting&width=800&height=1000&seq=aaiit-about-blue-2026&orientation=portrait',
              }}
            />
            <div className="absolute -bottom-6 -right-6 bg-white text-gray-800 px-8 py-6 rounded-2xl border border-blue-200/60 shadow-sm">
              <div className="text-4xl font-bold text-blue-600 mb-1" style={{ fontFamily: "'Inclusive Sans', sans-serif", fontWeight: 700 }}>
                100%
              </div>
              <div className="text-sm text-gray-500 whitespace-nowrap">Internship Eligible</div>
            </div>
            <div className="absolute top-6 -left-4 bg-blue-500 text-white px-5 py-3 rounded-xl">
              <div className="text-2xl font-bold" style={{ fontFamily: "'Inclusive Sans', sans-serif", fontWeight: 700 }}>3</div>
              <div className="text-xs whitespace-nowrap opacity-90">Programs</div>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold tracking-widest text-blue-600 mb-4 uppercase">About AAIIT</div>
            <h2
              className="text-5xl font-bold text-gray-800 mb-6 leading-tight"
              style={{ fontFamily: "'Inclusive Sans', sans-serif", fontWeight: 700 }}
            >
              Shaping the Next Generation of Tech Professionals
            </h2>

            <p className="text-base text-gray-600 leading-relaxed mb-5">
              AAIIT — Academy of Artificial Intelligence &amp; Information Technology — is a forward-thinking institute dedicated to empowering aspiring tech professionals with the skills, knowledge, and real-world experience they need to succeed.
            </p>

            <p className="text-base text-gray-600 leading-relaxed mb-8">
              Our carefully designed 6-month programs are intensive, practical, and career-focused. We don&apos;t just teach theory — we build real-world problem solvers who are ready to step into the workforce from day one. Upon graduation, every eligible student receives internship placement to launch their career with confidence.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {pillars.map((p) => (
                <div key={p.title} className="bg-blue-50/70 rounded-2xl p-5 hover:bg-blue-100 transition-colors group border border-transparent hover:border-blue-200/60">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-3 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <i className={`${p.icon} text-lg`}></i>
                  </div>
                  <h4 className="text-sm font-bold text-gray-800 mb-1" style={{ fontFamily: "'Inclusive Sans', sans-serif", fontWeight: 600 }}>
                    {p.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <InfiniteA variant="divider" className="mt-20 mb-2" />

        <div className="mt-8 bg-blue-50/70 rounded-3xl p-10 lg:p-14 relative overflow-hidden border border-blue-200/40">
          <InfiniteA variant="watermark" />
          <div className="relative z-10 grid md:grid-cols-3 gap-10">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2" style={{ fontFamily: "'Inclusive Sans', sans-serif", fontWeight: 700 }}>
                Our Mission
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                To democratize access to high-quality tech education and produce industry-ready professionals who drive innovation.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2" style={{ fontFamily: "'Inclusive Sans', sans-serif", fontWeight: 700 }}>
                Our Vision
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                To become the region&apos;s most trusted academy for AI and IT training, bridging the gap between education and industry.
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2" style={{ fontFamily: "'Inclusive Sans', sans-serif", fontWeight: 700 }}>
                Our Promise
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every student who completes our program gets internship opportunities — no exceptions. We&apos;re invested in your success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}