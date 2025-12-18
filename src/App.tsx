import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Innovation from './components/Innovation';
import Vision from './components/Vision';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Publications from './components/Publications';
import Media from './components/Media';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white">
      <Navigation scrolled={scrolled} />
      <Hero />
      <About />
      <Innovation />
      <Vision />
      <Experience />
      <Awards />
      <Publications />
      <Media />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
