import { useState } from 'react';
import InfiniteA from '@/pages/home/components/InfiniteA';

const courses = [
  {
    id: 1,
    title: 'Quality Assurance (QA)',
    tag: 'Most In-Demand',
    tagColor: 'bg-blue-100 text-blue-700',
    duration: '4 Months',
    icon: 'ri-shield-check-line',
    iconBg: 'bg-blue-500',
    image:
      'https://readdy.ai/api/search-image?query=Professional%20software%20quality%20assurance%20testing%20workspace%20with%20multiple%20monitors%20showing%20test%20automation%20dashboards%2C%20clean%20bright%20modern%20office%20with%20natural%20lighting%2C%20tester%20reviewing%20test%20cases%20on%20screen%2C%20focused%20professional%20atmosphere%2C%20test%20management%20tools%20visible%20on%20screens%2C%20plants%20and%20contemporary%20blue-accented%20decor&width=800&height=600&seq=aaiit-qa-blue-2026&orientation=landscape',
    description:
      'Master software testing methodologies, automation tools, and quality engineering practices. Learn manual testing, Selenium, JIRA, Agile QA, and CI/CD pipelines from industry experts.',
    topics: ['Manual & Automation Testing', 'Selenium & Python', 'JIRA & Test Management', 'API Testing', 'Agile & Scrum', 'CI/CD Pipelines'],
    outcome: 'QA Engineer / Test Analyst',
  },
  {
    id: 2,
    title: 'AI with Fullstack Development',
    tag: 'Flagship Program',
    tagColor: 'bg-blue-100 text-blue-700',
    duration: '4 Months',
    icon: 'ri-brain-line',
    iconBg: 'bg-blue-600',
    image:
      'https://readdy.ai/api/search-image?query=Modern%20AI%20development%20workspace%20with%20developer%20writing%20Python%20code%20on%20large%20monitor%2C%20machine%20learning%20visualizations%20on%20secondary%20screen%2C%20bright%20clean%20contemporary%20office%20with%20natural%20light%2C%20blue%20accent%20decor%2C%20plants%20and%20minimalist%20design%2C%20professional%20focused%20coding%20environment&width=800&height=600&seq=aaiit-ai-blue-2026&orientation=landscape',
    description:
      'Build intelligent applications from backend to frontend. Combine machine learning, deep learning, and modern web development to create AI-powered products that solve real problems.',
    topics: ['Python & Machine Learning', 'Deep Learning & TensorFlow', 'React & Node.js', 'REST APIs & Cloud', 'AI Integration', 'Full Project Deployment'],
    outcome: 'AI Developer / Fullstack Engineer',
  },
  {
    id: 3,
    title: 'Business Analysis',
    tag: 'High Growth',
    tagColor: 'bg-blue-50 text-blue-700',
    duration: '4 Months',
    icon: 'ri-bar-chart-2-line',
    iconBg: 'bg-blue-500',
    image:
      'https://readdy.ai/api/search-image?query=Business%20analysis%20workspace%20with%20data%20dashboards%20and%20process%20flow%20diagrams%20on%20screens%2C%20analyst%20reviewing%20requirements%20in%20bright%20modern%20office%2C%20collaborative%20meeting%20space%20with%20natural%20lighting%2C%20BI%20tools%20visible%2C%20professional%20corporate%20atmosphere%20with%20plants%20and%20contemporary%20blue-toned%20furniture%2C%20clean%20organized%20desk&width=800&height=600&seq=aaiit-ba-blue-2026&orientation=landscape',
    description:
      'Develop the skills to bridge business and technology. Learn requirements gathering, process modeling, data analysis, and stakeholder management to lead successful digital transformation projects.',
    topics: ['Requirements Elicitation', 'UML & Process Modeling', 'SQL & Data Analysis', 'Agile & Scrum BA', 'Power BI / Tableau', 'Stakeholder Management'],
    outcome: 'Business Analyst / Product Owner',
  },
];

const internshipItems = [
  'Work on real client and internal projects',
  'Collaborate in a professional team environment',
  'Receive guidance from experienced mentors',
  'Build an impressive portfolio',
  'Develop industry-ready skills',
  'Gain practical experience before entering the job market',
];

export default function Courses() {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  return (
    <section id="courses" className="py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="text-xs font-bold tracking-widest text-blue-600 mb-3 uppercase">Our Programs</div>
          <h2
            className="text-5xl lg:text-6xl font-bold text-gray-800 mb-5"
            style={{ fontFamily: "'Inclusive Sans', sans-serif", fontWeight: 700 }}
          >
            4-Month Intensive Programs
          </h2>
          <p className="text-gray-500 max-w-xl text-base leading-relaxed">
            Career-focused, hands-on, and designed for the real world. Each program includes internship opportunities upon completion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-[28px] overflow-hidden group hover:-translate-y-1 transition-all duration-300 cursor-pointer border border-gray-100"
              onClick={() => setActiveTab(activeTab === course.id ? null : course.id)}
            >
              <div className="relative h-52 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${course.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${course.tagColor}`}>
                  {course.tag}
                </div>
                <div className={`absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center rounded-xl ${course.iconBg}`}>
                  <i className={`${course.icon} text-white text-lg`}></i>
                </div>
              </div>

              <div className="p-7">
                <h3
                  className="text-lg font-bold text-gray-800 leading-tight mb-3"
                  style={{ fontFamily: "'Inclusive Sans', sans-serif", fontWeight: 600 }}
                >
                  {course.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{course.description}</p>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeTab === course.id ? 'max-h-60 mb-5' : 'max-h-0'
                  }`}
                >
                  <div className="text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">What You&apos;ll Learn</div>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic) => (
                      <span key={topic} className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full whitespace-nowrap">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 text-gray-400 text-xs">
                      <i className="ri-time-line text-sm"></i>
                      <span className="whitespace-nowrap">{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-400 text-xs">
                      <i className="ri-briefcase-line text-sm"></i>
                      <span className="whitespace-nowrap">Internship</span>
                    </div>
                  </div>
                  <button className="text-blue-600 text-sm font-semibold flex items-center space-x-1 whitespace-nowrap cursor-pointer">
                    <span>{activeTab === course.id ? 'Less' : 'Details'}</span>
                    {activeTab === course.id ? <i className="ri-arrow-up-s-line"></i> : <i className="ri-arrow-down-s-line"></i>}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <InfiniteA variant="divider" className="my-16" />

      </div>
    </section>
  );
}