import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import StorySection from './components/StorySection';
import Courses from './components/Courses';
import Internship from './components/Internship';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <StorySection />
      <Courses />
      <Internship />
      <Contact />
      <Footer />
    </main>
  );
}