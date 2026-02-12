
import React from 'react';

const MyntraStatement: React.FC = () => {
  return (
    <section className="py-32 px-8 md:px-16 bg-white text-center">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 flex justify-center">
          <div className="w-12 h-[1px] bg-neutral-300"></div>
        </div>
        <h2 className="text-sm uppercase tracking-[0.4em] text-neutral-400 mb-8 font-medium">A Considered Partnership</h2>
        <p className="text-2xl md:text-3xl serif italic text-neutral-600 leading-relaxed mb-10">
          "By styling exclusively through Myntra, we bridge the gap between high-level aesthetic curation and seamless, reliable accessibility. It is a partnership built on transparency and the shared pursuit of quality."
        </p>
        <p className="text-[11px] uppercase tracking-widest text-neutral-400 font-light max-w-lg mx-auto leading-loose">
          QUINN FOSTER DOES NOT SELL DIRECTLY. ALL CURATED SELECTIONS ARE FULFILLED VIA MYNTRA TO ENSURE AUTHENTICITY AND SERVICE EXCELLENCE.
        </p>
      </div>
    </section>
  );
};

export default MyntraStatement;
