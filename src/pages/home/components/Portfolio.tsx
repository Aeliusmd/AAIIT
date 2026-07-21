export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: 'Elementary Teacher',
      achievement: 'Secured position at top-rated school',
      image:
        'https://readdy.ai/api/search-image?query=professional%20teacher%20CV%20resume%20document%20on%20clean%20white%20background%20modern%20elegant%20layout%20with%20education%20section%20highlighted%20organized%20format%20professional%20typography%20simple%20minimalist%20design&width=600&height=800&seq=portfolio-cv-001&orientation=portrait',
      price: '$299',
    },
    {
      id: 2,
      title: 'High School Principal',
      achievement: 'Career advancement to leadership role',
      image:
        'https://readdy.ai/api/search-image?query=executive%20education%20resume%20with%20leadership%20achievements%20professional%20CV%20layout%20on%20clean%20white%20background%20modern%20design%20administrative%20experience%20highlighted%20elegant%20typography%20organized%20sections&width=600&height=800&seq=portfolio-cv-002&orientation=portrait',
      price: '$399',
    },
    {
      id: 3,
      title: 'Special Education Teacher',
      achievement: 'International school placement',
      image:
        'https://readdy.ai/api/search-image?query=specialized%20teaching%20CV%20document%20showcasing%20certifications%20and%20qualifications%20professional%20resume%20layout%20clean%20white%20background%20modern%20format%20education%20credentials%20highlighted&width=600&height=800&seq=portfolio-cv-003&orientation=portrait',
      price: '$299',
    },
    {
      id: 4,
      title: 'Curriculum Coordinator',
      achievement: 'District-level promotion',
      image:
        'https://readdy.ai/api/search-image?query=curriculum%20development%20professional%20resume%20with%20project%20highlights%20modern%20CV%20layout%20clean%20white%20background%20organized%20sections%20professional%20design%20educational%20leadership%20focus&width=600&height=800&seq=portfolio-cv-004&orientation=portrait',
      price: '$349',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
          <h2
            className="text-6xl font-bold text-gray-900 mb-4 lg:mb-0"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Featured Work
          </h2>
          <p className="text-lg text-gray-600 max-w-xl">
            Successful CV transformations and career outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              style={{ aspectRatio: '3/4' }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

              <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-bold text-gray-900 whitespace-nowrap">{item.price}</span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.achievement}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-teal-600 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-teal-700 transition-colors inline-flex items-center space-x-2 whitespace-nowrap cursor-pointer">
            <span>View All Success Stories</span>
            <i className="ri-arrow-right-line text-xl"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
