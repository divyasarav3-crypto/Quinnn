
import React from 'react';

const QuinnRack: React.FC = () => {
  return (
    <section id="rack" className="py-24 md:py-40 px-8 md:px-16 bg-[#F2EFE9]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="flex-1 order-2 md:order-1">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1374&auto=format&fit=crop" 
              alt="Curated clothing rack" 
              className="w-full h-auto"
            />
            <div className="absolute -bottom-10 -right-10 hidden lg:block p-12 bg-white/40 backdrop-blur-md max-w-xs">
              <p className="text-sm font-light italic leading-relaxed">
                "Finding a home for pre-loved quality is the highest form of respect we can show to craftsmanship."
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 order-1 md:order-2">
          <span className="text-[11px] uppercase tracking-[0.3em] text-soft mb-6 block">Curated Shopping & Consignment</span>
          <h2 className="text-4xl md:text-6xl serif mb-8 leading-tight">The Quinn Rack</h2>
          <p className="text-soft leading-relaxed mb-8 font-light">
            A boutique selection of pre-loved pieces and vintage finds. These are intentional garments chosen for their longevity, textile quality, and timeless silhouette. This is not shopping; it is the thoughtful acquisition of future heirlooms.
          </p>
          <div className="flex gap-8 items-center">
            <button className="px-8 py-4 border border-neutral-400 text-[10px] uppercase tracking-widest hover:bg-[#2D2D2D] hover:text-white hover:border-transparent transition-all duration-300">
              Explore Curation
            </button>
            <a href="#" className="text-[10px] uppercase tracking-widest editorial-link">Consignment Inquiries</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuinnRack;
