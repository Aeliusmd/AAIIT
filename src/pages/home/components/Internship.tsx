import InfiniteA from '@/pages/home/components/InfiniteA';

const internshipItems = [
  { text: 'Work on real client and internal projects' },
  { text: 'Collaborate in a professional team environment' },
  { text: 'Receive guidance from experienced mentors' },
  { text: 'Build an impressive portfolio' },
  { text: 'Develop industry-ready skills' },
  { text: 'Gain practical experience before entering the job market' },
];

export default function Internship() {
  return (
    <section id="internship" className="py-28 px-6 lg:px-12 bg-blue-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-6">
          <div className="text-xs font-bold tracking-widest text-blue-600 mb-3 uppercase">Internship Program</div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: "'Inclusive Sans', sans-serif", fontWeight: 700 }}
          >
            Why AAIIT Programs?
          </h2>
          <p className="text-gray-500 max-w-xl text-base leading-relaxed">
            We bridge the gap between learning and real-world experience — because your career deserves more than just a certificate.
          </p>
        </div>

        <InfiniteA variant="divider" className="mb-14" />

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h3
              className="text-2xl font-bold text-gray-800 mb-8"
              style={{ fontFamily: "'Inclusive Sans', sans-serif", fontWeight: 600 }}
            >
              During your internship, you&apos;ll:
            </h3>

            <div className="space-y-4">
              {internshipItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 bg-white rounded-2xl p-5 border border-blue-200/60 hover:border-blue-300 transition-colors group"
                >
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 flex-shrink-0 mt-0.5 group-hover:bg-blue-200 transition-colors">
                    <i className="ri-check-fill text-blue-600 text-base"></i>
                  </div>
                  <span className="text-gray-700 text-base leading-relaxed pt-1">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-white rounded-2xl p-6 border border-blue-200/60">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-blue-100 flex-shrink-0">
                  <i className="ri-information-line text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h4
                    className="text-sm font-bold text-gray-800 mb-1"
                    style={{ fontFamily: "'Inclusive Sans', sans-serif", fontWeight: 600 }}
                  >
                    Eligibility
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Internship opportunities are available for students who successfully complete their course and meet the academy&apos;s internship requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className="w-full h-[500px] rounded-3xl bg-cover bg-center"
              style={{
                backgroundImage:
                  'url(https://readdy.ai/api/search-image?query=Young%20diverse%20technology%20professionals%20collaborating%20in%20a%20bright%20modern%20open%20workspace%2C%20mentor%20guiding%20junior%20team%20members%20at%20standing%20desk%20with%20large%20monitors%20showing%20code%20and%20data%20dashboards%2C%20natural%20lighting%20streaming%20through%20large%20windows%2C%20plants%20and%20contemporary%20blue-accented%20furniture%2C%20genuine%20smiles%20and%20engaged%20team%20atmosphere%2C%20professional%20yet%20friendly%20creative%20tech%20office%20environment&width=800&height=1000&seq=aaiit-internship-blue-2026&orientation=portrait)',
              }}
            />
            <div className="absolute -bottom-5 -left-5 bg-white px-7 py-5 rounded-2xl border border-blue-200/60">
              <div className="text-4xl font-bold text-blue-600 mb-1" style={{ fontFamily: "'Inclusive Sans', sans-serif", fontWeight: 700 }}>100%</div>
              <div className="text-xs text-gray-500 whitespace-nowrap">Eligible Graduates</div>
            </div>
            <div className="absolute top-5 -right-4 bg-blue-500 text-white px-5 py-3 rounded-xl">
              <div className="text-2xl font-bold" style={{ fontFamily: "'Inclusive Sans', sans-serif", fontWeight: 700 }}>6</div>
              <div className="text-xs whitespace-nowrap opacity-90">Key Benefits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}