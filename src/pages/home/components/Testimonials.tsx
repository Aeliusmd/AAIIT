export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Jennifer Rodriguez',
      role: '@SpringfieldElementary',
      avatar: 'bg-mint-100',
      text: 'Sarah transformed my outdated CV into a compelling story of my teaching journey. Within two weeks, I received three interview invitations from top-rated schools. Her expertise in highlighting my unique strengths made all the difference.',
      color: '#D4F4DD',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: '@RiversideHighSchool',
      avatar: 'bg-lavender-100',
      text: 'The portfolio development service exceeded my expectations. Sarah helped me showcase my curriculum innovations and student success stories in a way that truly resonated with hiring committees.',
      color: '#E5DEFF',
    },
    {
      id: 3,
      name: 'Amanda Foster',
      role: '@OakwoodAcademy',
      avatar: 'bg-peach-100',
      text: 'As a career changer entering education, I was unsure how to present my background. Sarah\'s coaching sessions gave me the confidence and tools to craft a narrative that highlighted my transferable skills. I landed my dream teaching position!',
      color: '#FFE5D9',
    },
    {
      id: 4,
      name: 'David Thompson',
      role: '@MetropolitanSchoolDistrict',
      avatar: 'bg-mint-100',
      text: 'The attention to detail and personalized approach made working with Sarah an absolute pleasure. She understood the nuances of educational leadership roles and helped me secure a principal position.',
      color: '#D4F4DD',
    },
    {
      id: 5,
      name: 'Lisa Martinez',
      role: '@InternationalSchoolBangkok',
      avatar: 'bg-peach-100',
      text: 'Moving to an international teaching position seemed daunting until Sarah helped me create a CV that appealed to global schools. Her insights into what international recruiters look for were invaluable.',
      color: '#FFE5D9',
    },
    {
      id: 6,
      name: 'Robert Williams',
      role: '@TechValleySTEMAcademy',
      avatar: 'bg-lavender-100',
      text: 'Sarah\'s expertise in education sector hiring trends is unmatched. She helped me position my STEM teaching experience in a way that stood out. Highly recommend her services to any educator looking to advance their career.',
      color: '#E5DEFF',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <span
            className="inline-block px-5 py-2 rounded-full text-sm font-semibold text-white mb-6 whitespace-nowrap bg-teal-600"
          >
            Client Success Stories
          </span>
          <h2
            className="text-6xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Educators Who
            <br />
            Transformed Their Careers
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold text-gray-700"
                  style={{ backgroundColor: testimonial.color }}
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="font-bold text-lg text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>

              <div className="mb-4 flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i key={star} className="ri-star-fill text-amber-400 text-lg"></i>
                ))}
              </div>

              <p className="text-gray-700 text-base leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
