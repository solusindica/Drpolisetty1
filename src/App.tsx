import { useState, useEffect } from 'react';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Innovation from './components/Innovation';
import Vision from './components/Vision';
import FounderOf from './components/FounderOf'; // ✅ ADDED
import Thoughts from './components/Thoughts';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Publications from './components/Publications';
import Media from './components/Media';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import { Routes, Route } from 'react-router-dom';
import RegenerativeMedicine from './pages/RegenerativeMedicine';
import BiomedicalDeviceEngineering from './pages/BiomedicalDeviceEngineering';
import AIDeepLearning from './pages/AIDeepLearning';
import IntegrativeMedicine from './pages/IntegrativeMedicine';
import Patents from './pages/Patents';
import Publication from './pages/Publication';
import PremiumCard from './pages/PremiumCard.tsx';
import AdvancedCareProgram from './pages/AdvancedCareProgram.tsx'




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
  <Routes>

    {/* HOME PAGE */}
    <Route
      path="/"
      element={
        <div className="bg-black text-white">
          <Navigation scrolled={scrolled} />

          <div className="pt-20">
            <Hero />
            <About />
            <Innovation />
            <Vision />
            <FounderOf />
            <Thoughts />
            <Experience />
            <Awards />
            <Publications />
            <Media />
            <Gallery />
            <Contact />
          </div>
        </div>
      }
    />

    {/* NEW PAGE */}
    <Route
      path="/regenerative-medicine"
      element={<RegenerativeMedicine />}
    />
     {/* BIOMEDICAL DEVICE ENGINEERING PAGE */}
      <Route
        path="/biomedical-device-engineering"
        element={<BiomedicalDeviceEngineering />}
      />

<Route
  path="/ai-deep-learning"
  element={<AIDeepLearning />}
/>

      <Route
  path="/integrative-medicine"
  element={<IntegrativeMedicine />}
/>
         <Route
  path="/patents"
  element={<Patents />}
/>

      <Route
  path="/publication"
  element={<Publication />}
/>
<Route
  path="/premiumcard"
  element={<PremiumCard />}
/>
<Route
  path="/advancedcareProgram"
  element={<AdvancedCareProgram />}
/>


  </Routes>
);


}

export default App;
