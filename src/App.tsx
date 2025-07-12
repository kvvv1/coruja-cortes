import React from 'react';
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