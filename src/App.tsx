import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Course from './components/Course';
import Gallery from './components/Gallery';
import Rifa from './components/Rifa';
import Results from './components/Results';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Hero />
      {showHeader && <Header />}
      <About />
      <Course />
      <Gallery />
      <Rifa />
      <Results />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;