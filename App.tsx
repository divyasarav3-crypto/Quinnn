
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import QuinnRack from './components/QuinnRack';
import CurationStudio from './components/CurationStudio';
import MyntraStatement from './components/MyntraStatement';
import FashionFriday from './components/FashionFriday';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

/**
 * Quinn Foster Editorial Homepage
 * 
 * Design Reasoning:
 * This site utilizes a high-contrast spacing rhythm and large serif headings to mimic 
 * luxury fashion publications. The color palette of bone, ivory, and taupe creates 
 * a psychological sense of 'calm' and 'competence.'
 */

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <QuinnRack />
        <CurationStudio />
        <MyntraStatement />
        <FashionFriday />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
