import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen bg-[#1C1C1D] text-gray-100 pb-24">
      <Header activeSection={activeSection} onNavSelect={setActiveSection} />
      <main className="pt-4">
        {activeSection === 'about' && (
          <>
            <Hero />
            <About />
          </>
        )}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'skills' && <Skills />}
        {activeSection === 'certifications' && <Certifications />}
        {activeSection === 'education' && <Education />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
