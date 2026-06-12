export default function Programs() {
  const programs = [
    {
      badge: "Most In-Demand",
      badgeColor: "bg-green-100 text-green-700",
      title: "Quality Assurance (QA)",
      description:
        "Master software testing methodologies, automation tools, and quality engineering practices. Learn manual testing, Selenium, JIRA, Agile QA, and CI/CD pipelines from industry experts.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
      icon: "ri-shield-check-line",
    },
    {
      badge: "Flagship Program",
      badgeColor: "bg-blue-100 text-blue-700",
      title: "AI with Fullstack Development",
      description:
        "Build intelligent applications from backend to frontend. Combine machine learning, deep learning, and modern web development to create AI-powered products that solve real-world problems.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
      icon: "ri-brain-line",
    },
    {
      badge: "High Growth",
      badgeColor: "bg-orange-100 text-orange-700",
      title: "Business Analysis",
      description:
        "Develop the skills to bridge business and technology. Learn requirements gathering, process modeling, data analysis, and stakeholder management to lead successful digital transformation projects.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      icon: "ri-bar-chart-grouped-line",
    },
  ];

  return (
    <section
      id="courses"
      className="py-28 px-6 lg:px-12 bg-[#f8fafc]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-xs font-bold tracking-widest text-blue-600 mb-4 uppercase">
            Our Programs
          </div>

          <h2
            className="text-5xl font-bold text-[#0d1554] mb-6 leading-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            6-Month Intensive Programs
          </h2>

          <p className="max-w-3xl mx-auto text-base text-gray-600 leading-relaxed">
            Career-focused, hands-on, and designed for the real world.
            Each program includes a guaranteed internship placement upon
            completion.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-64 object-cover"
                />

                {/* Badge */}
                <div
                  className={`absolute top-4 left-4 px-4 py-2 rounded-xl text-xs font-bold ${program.badgeColor}`}
                >
                  {program.badge}
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 right-4 w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                  <i className={`${program.icon} text-xl`} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-2xl font-bold text-[#0d1554] mb-3"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {program.title}
                </h3>

                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  {program.description}
                </p>

                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <i className="ri-time-line"></i>
                      6 Months
                    </span>

                    <span className="flex items-center gap-2">
                      <i className="ri-briefcase-line"></i>
                      Internship
                    </span>
                  </div>

                  <button className="text-blue-600 font-semibold hover:text-blue-700">
                    Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Strip */}
        <div className="mt-20 bg-[#0d1554] rounded-3xl p-10 lg:p-14">
          <div className="grid md:grid-cols-3 gap-10 text-white">
            <div>
              <div
                className="text-4xl font-bold text-blue-400 mb-2"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                6 Months
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Intensive training designed to make you job-ready in a short
                period of time.
              </p>
            </div>

            <div>
              <div
                className="text-4xl font-bold text-blue-400 mb-2"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Internship
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Every student receives guaranteed internship placement after
                successful completion.
              </p>
            </div>

            <div>
              <div
                className="text-4xl font-bold text-blue-400 mb-2"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Career Ready
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Learn practical skills, build projects, and prepare for
                interviews with expert mentors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}