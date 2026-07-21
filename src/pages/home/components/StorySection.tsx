export default function StorySection() {
  return (
    <section id="our-story" className="py-28 px-6 lg:px-12 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="text-xs font-bold tracking-widest text-blue-600 mb-3 uppercase">Our Story</div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight"
            style={{ fontFamily: "'Inclusive Sans', sans-serif", fontWeight: 700 }}
          >
            The Missing Piece
          </h2>
          <p className="text-gray-500 max-w-lg text-base leading-relaxed">
            A story about why knowledge alone isn&apos;t enough — and what truly prepares you for the real world.
          </p>
        </div>

        {/* Video */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-gray-200 shadow-lg bg-black">
          <video
            className="w-full h-full object-cover"
            controls
            playsInline
            poster="/story-poster.jpg"
          >
            <source src="/src/videos/story.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}