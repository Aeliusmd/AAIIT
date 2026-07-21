export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Professional CV Crafting',
      description: 'Tailored resumes that highlight your teaching excellence and achievements',
      icon: 'ri-file-text-line',
      bgColor: 'bg-gray-900',
      textColor: 'text-white',
    },
    {
      id: 2,
      title: 'Showcase Your Impact',
      description: 'Portfolio Development',
      image:
        'https://readdy.ai/api/search-image?query=professional%20teaching%20portfolio%20documents%20spread%20on%20clean%20white%20desk%20organized%20educational%20materials%20certificates%20lesson%20plans%20colorful%20student%20work%20samples%20bright%20natural%20lighting%20modern%20workspace%20inspiring%20teacher%20resources&width=800&height=600&seq=service-portfolio-001&orientation=landscape',
      isImageCard: true,
    },
    {
      id: 3,
      title: '1-on-1',
      subtitle: 'Career Coaching',
      description: 'Personalized career guidance sessions',
      image:
        'https://readdy.ai/api/search-image?query=professional%20career%20coaching%20session%20two%20people%20having%20meaningful%20conversation%20in%20bright%20modern%20office%20laptop%20and%20documents%20on%20table%20warm%20natural%20lighting%20collaborative%20atmosphere%20mentoring%20scene&width=800&height=600&seq=service-coaching-001&orientation=landscape',
      hasNumber: true,
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <div className="flex flex-col items-center text-center mb-4">
            <div className="text-xs font-semibold tracking-widest text-gray-500 mb-6">
              EXPERTISE
            </div>
            <h2
              className="text-6xl font-bold text-gray-900"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              What I Offer
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => {
            if (service.isImageCard) {
              return (
                <div
                  key={service.id}
                  className="relative rounded-[32px] overflow-hidden h-[480px] bg-cover bg-center group cursor-pointer"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2">
                    <i className="ri-folder-line text-teal-600"></i>
                    <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">Portfolio</span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
              );
            }

            if (service.hasNumber) {
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-[32px] p-8 flex flex-col justify-between h-[480px] group cursor-pointer hover:shadow-xl transition-shadow"
                >
                  <div>
                    <div
                      className="text-6xl font-bold text-gray-900 mb-4"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      {service.title}
                    </div>
                    <div className="text-xl font-semibold text-gray-900 mb-3">
                      {service.subtitle}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                  <div
                    className="w-full h-48 rounded-2xl bg-cover bg-center mt-6"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                </div>
              );
            }

            return (
              <div
                key={service.id}
                className={`${service.bgColor} rounded-[32px] p-8 h-[480px] flex flex-col justify-between group cursor-pointer hover:shadow-xl transition-shadow`}
              >
                <div>
                  <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center mb-6">
                    <i className={`${service.icon} text-3xl text-white`}></i>
                  </div>
                  <h3 className={`text-3xl font-bold ${service.textColor} mb-4 leading-tight`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
                <button className="mt-6 text-teal-400 font-semibold text-sm flex items-center space-x-2 group-hover:space-x-3 transition-all whitespace-nowrap cursor-pointer">
                  <span>Learn More</span>
                  <i className="ri-arrow-right-line text-lg"></i>
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-10 lg:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Why Choose My Services?
              </h3>
              <ul className="space-y-4">
                {[
                  'Specialized expertise in education sector',
                  'Proven track record with 500+ successful placements',
                  'Personalized approach tailored to your unique strengths',
                  'Industry insights from years of teaching experience',
                  'Ongoing support throughout your career journey',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-teal-600 text-xl mt-0.5"></i>
                    <span className="text-gray-700 text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="w-full h-80 rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://readdy.ai/api/search-image?query=successful%20happy%20teacher%20celebrating%20achievement%20in%20bright%20modern%20classroom%20holding%20certificate%20or%20award%20warm%20smile%20professional%20attire%20natural%20lighting%20inspiring%20educational%20success%20story&width=800&height=600&seq=service-why-001&orientation=landscape)',
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
