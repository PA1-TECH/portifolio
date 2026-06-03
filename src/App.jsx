import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Background Ambient Glow Orbs */}
      <div className="ambient-bg">
        <div className="orb-1"></div>
        <div className="orb-2"></div>
        <div className="orb-3"></div>
      </div>

      {/* Main Portfolio Sections */}
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
