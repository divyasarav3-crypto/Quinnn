
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center pt-24 pb-12 px-8 md:px-16 gap-12 overflow-hidden">
      {/* Editorial Text Area */}
      <div className="flex-1 z-10 flex flex-col justify-center max-w-2xl animate-fade-in-up">
        <span className="text-[12px] uppercase tracking-[0.3em] text-soft mb-6 inline-block">Personal Style Consultant</span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-10 serif font-light italic md:not-italic">
          Style is a <span className="italic">conversation</span> with yourself.
        </h1>
        <p className="text-lg md:text-xl text-soft leading-relaxed max-w-lg mb-12 font-light">
          Quinn Foster curates wardrobes for the modern woman who seeks clarity over clutter. Based on intentionality, personal relationships, and long-term confidence.
        </p>
        <div>
          <button className="px-10 py-5 bg-[#2D2D2D] text-white text-[11px] uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors duration-300">
            Begin a consultation
          </button>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="flex-1 w-full h-[60vh] md:h-[80vh] relative group overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1594750801362-73599292376b?q=80&w=2000&auto=format&fit=crop" 
          alt="Quinn Foster portrait in natural light" 
          className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-[2000ms] ease-out"
        />
        <div className="absolute bottom-8 right-8 text-white/70 text-[10px] uppercase tracking-widest">
          Photography by Claire L.
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F2EFE9] -z-10 translate-x-1/4"></div>
    </section>
  );
};

export default Hero;
