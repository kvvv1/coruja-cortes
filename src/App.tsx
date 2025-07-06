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
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
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